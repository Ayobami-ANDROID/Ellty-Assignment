import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';

const MainPage = () => {
  const [checkboxes, setCheckboxes] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  useEffect(() => {
    const allChecked = Object.keys(checkboxes)
      .filter(key => key !== 'allPages')
      .every(key => checkboxes[key]);
    
    if (allChecked !== checkboxes.allPages) {
      setCheckboxes(prev => ({ ...prev, allPages: allChecked }));
    }
  }, [checkboxes]);

  const handleCheckboxChange = (name) => {
    if (name === 'allPages') {
      const newValue = !checkboxes.allPages;
      setCheckboxes({
        allPages: newValue,
        page1: newValue,
        page2: newValue,
        page3: newValue,
        page4: newValue,
      });
    } else {
      setCheckboxes(prev => ({
        ...prev,
        [name]: !prev[name],
      }));
    }
  };

  const handleButtonClick = () => {
    let selectedPages = [];
    if (checkboxes.allPages) {
      selectedPages = ['All Pages'];
    } else {
      for (let i = 1; i <= 4; i++) {
        if (checkboxes[`page${i}`]) {
          selectedPages.push(`Page ${i}`);
        }
      }
    }

    const message = selectedPages.length > 0
      ? `Selected pages: ${selectedPages.join(', ')}`
      : 'No page selected';

    toast(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='shadow-[0_8px_15px_0px_rgba(20,20,20,0.12),0_0_4px_0px_rgba(20,20,20,0.1)] rounded-[8px] bg-[#fff] md:w-[370px] w-[300px] mt-24 p-6'>
        <div className='border-b-[0.7px] border-[#CDCDCD] pb-4'>
          <CheckBox 
            title='All Pages'
            checked={checkboxes.allPages}
            onChange={() => handleCheckboxChange('allPages')}
          />
        </div>

        <div className='flex flex-col gap-6 py-4 border-b-[0.7px] border-[#CDCDCD]'>
          {['page1', 'page2', 'page3', 'page4'].map((page, index) => (
            <CheckBox
              key={page}
              title={`Page ${index + 1}`}
              checked={checkboxes[page]}
              onChange={() => handleCheckboxChange(page)}
            />
          ))}
        </div>

        <div className='mt-4'>
          <Button onClick={handleButtonClick} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainPage;