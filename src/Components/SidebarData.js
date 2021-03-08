import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { GiAbstract120 } from 'react-icons/gi'
import { Gi3DMeeple } from 'react-icons/gi'
import { GiAbstract043, GiAbstract016 } from 'react-icons/gi'




export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Ingham',
    path: '/Ingham',
    icon: <GiAbstract120 />,
    cName: 'nav-text'
  
  },
  {
    title: 'Wilkinson',
    path: '/Wilkinson',
    icon: <Gi3DMeeple />,
    cName: 'nav-text'
  },
 
];