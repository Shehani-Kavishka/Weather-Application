"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { github } from '../utils/icons';
import { Button } from '@/components/ui/button';
import ThemeDropDown from './ThemeDropDown/ThemeDropDown';
import SearchDialog from './SearchDialog/SearchDialog';
import { useGlobalContext } from '../context/globalContext';
import { CloudCog } from 'lucide-react';

function Navbar() {
  const router = useRouter();
  const {state} = useGlobalContext();
  
  return (
    <div className='w-full py-4 flex items-center justify-between'>
        <div className='left'></div>
        <div className='search-container flex shrink-0 w-full gap-2 sm:w-fit'>
            <SearchDialog/>

            <div className="btn-group flex items-center gap-2">
            <ThemeDropDown/>
            <Button 
            className='source-code flex items-center gap-2'
            onClick={() => {
                router.push("https://github.com");
            }}
            >
                {github} Source Code 
            </Button>
            </div>
        </div>
    </div>
  );
}

export default Navbar;