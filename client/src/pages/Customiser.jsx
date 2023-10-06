// import React, { useState, useEffect } from 'react';
import { AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';

// import config from '../config/config';
import state from '../store';
// import { download } from '../assets';
// import { downloadCanvasToImage, reader } from '../config/helpers';
// import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
// import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';


const Customiser = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
    {!snap.intro && (  
        <div>
            <motiondiv  key = "custom" className="absolute left-0 top-0 z-100" {...slideAnimation('left')}>

            </motiondiv>
        </div>
    )}
    </AnimatePresence>
  )
}

export default Customiser