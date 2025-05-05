import React from 'react'
import UploadButton from './UploadButton';
import DashboardIcon from './DashboardIcon';

const LibrarySectionHeader = () => {
  return (
    <div className="flex items-center justify-between">
        <h3 className='font-medium text-base'>Recently visited</h3>
        <div className='flex gap-2 items-center'>
            <DashboardIcon icon="search"/>
            <DashboardIcon icon="folder"/>
            <UploadButton gaps="gap-1" padY="py-1" padX="px-2"/>
        </div>
    </div>
  )
}

export default LibrarySectionHeader;