import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Form = () => {
  // States
  const [originalLink, setOriginalLink] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState('')


  // Handling API 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Clear previous error messages
    setError("");
  
    // Check if the original link is empty
    if (!originalLink.trim()) {
      setError("Please add a link");
      return;
    }
  
    // Validate the URL format using regular expression
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(originalLink)) {
      setError("Invalid URL format. Please enter a valid URL.");
      return;
    }
  
    try {
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${originalLink}`);
  
      // Check if the API response contains a valid shortened link
      if (!response?.data?.ok || !response?.data?.result?.short_link) {
        setError("Invalid link. Please enter a valid URL.");
        return;
      }
  
      const shortenedLink = response.data.result.short_link;
      const entry = {
        originalLink,
        shortenedLink,
        copied: false // Added `copied` property to track copy status
      };
      setShortenedLinks([...shortenedLinks, entry]);
      setOriginalLink("");
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
  };

  // Handling input change
  const handleOriginalLinkChange = (event) => {
    setOriginalLink(event.target.value);
  };
  // Handling Copy Link
  const handleCopyClick = (index) => {
    const updatedLinks = [...shortenedLinks];
    updatedLinks[index].copied = true;
    setShortenedLinks(updatedLinks);

    // Reset the "Copied!" status after 2 seconds
    setTimeout(() => {
      const resetLinks = [...shortenedLinks];
      resetLinks[index].copied = false;
      setShortenedLinks(resetLinks);
    }, 1000);
  };

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem('shortenedLinks')) || [];
    setShortenedLinks(savedLinks);
  }, []);




  // Save links to local storage whenever shortenedLinks changes
  useEffect(() => {
    localStorage.setItem('shortenedLinks', JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);





  // Handling Delete Link
  const handleDeleteClick = (index) => {
    const updatedLinks = [...shortenedLinks];
    updatedLinks.splice(index, 1);
    setShortenedLinks(updatedLinks);
  };
  // Handling Clear History
  const handleClearHistoryClick = () => {
    setShortenedLinks([]); // Clear the shortened links in state
    localStorage.removeItem('shortenedLinks'); // Clear the saved data in local storage
  };
  return (
    <div className='shortenForm '>
      <div className='formBg container mt-[-85px] mx-auto  rounded-[5px] md:rounded-[10px] px-12  py-10 '>
        <form onSubmit={handleSubmit} className='md:flex block  w-full gap-4 '>
          <div className='col-span-5 w-full'>
            <div className='   border bg-white rounded-[5px]  md:rounded-[10px] mb-2 md:mb-0 '
              style={{ borderColor: error ? 'red' : '' }}>
              <input type='text'
                id='shortcode'
                value={originalLink}
                onChange={handleOriginalLinkChange}
                placeholder='Shorten a link here...'
                className={`px-4 py-3 md:py-02 bg-transparent  w-full sm:text-[18px] md:text-[20px]  font-medium
                ${error ? 'text-[#F46363]' : ''}`} />
            </div>
            {error && <div className="text-[#F46363] block 
            text-[12px] md:text-[16px] mb-2 mt-[-6px] md:mt-0 md:mb-0" id="alert">{error} </div>}

          </div>
          <button type='submit' className='mainBg border-[#2BD0D0] h-min  rounded-[5px] md:rounded-[10px]  font-bold px-6 py-3 sm:text-[18px] md:text-[20px] text-center
        hover:bg-[#9AE3E3] transition-all cursor-pointer w-full md:w-[18%]
        '>Shorten It!</button>
        </form>
      </div>




      <ul className='my-10'>
        {shortenedLinks.map((link, index) => (
          <div key={index} className='block md:flex md:justify-between items-center mb-5 bg-white p-4 rounded-md text-[20px]'>
            <div className='text-[#34313D] font-medium border-b md:border-none
            pb-1 md:pb-0'>
              {link.originalLink}
            </div>
            <div className='gap-4 block md:flex items-center  mt-2 md:mt-0'>
              <span className='text-[#2BD0D0] text-[20px]'>{link.shortenedLink}</span>

              <CopyToClipboard text={link.shortenedLink} onCopy={() => handleCopyClick(index)}>
                <button
                  style={{ backgroundColor: link.copied ? "#3A3054" : "#2BD0D0" }}
                  className='px-6 py-1 mainBg rounded-[5px]
              w-full mt-2 md:mt-0'>{link.copied ? "Copied!" : "Copy"}</button>
              </CopyToClipboard>

              {/* DELETE BUTTON */}
              <button className='hidden md:block text-[#F46363] hover:opacity-70 '
                onClick={() => handleDeleteClick(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
              <button className='blcok md:hidden text-white w-full mt-3 bg-[#F46363] hover:opacity-70
              px-6 py-1 rounded-[5px]'
                onClick={() => handleDeleteClick(index)}>
                Delete
              </button>
            </div>

          </div>

        ))}
      </ul>

      <div>
        {shortenedLinks.length > 0 && (
          <div className="my-5 flex justify-center">
            <button
              onClick={handleClearHistoryClick}
              className="px-6 py-2 text-[20px]  font-semibold mainBg shadow-sm text-white rounded-[5px]
              hover:bg-[#9AE3E3] transition-all cursor-pointer">
              Clear History
            </button>
          </div>
        )}
      </div>
    </div >
  )
}

export default Form