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
    title: 'Beatrice Marten',
    path: '/BeatriceAnnieMarten',
    icon: <GiAbstract120 />,
    cName: 'nav-text'
  
  },
  {
    title: 'Thomas John Marten',
    path: '/ThomasJohnMarten',
    icon: <Gi3DMeeple />,
    cName: 'nav-text'
  },
  {
    title: 'Selina McNaught',
    path: '/SelinaMcNaught',
    icon: <GiAbstract043 />,
    cName: 'nav-text'
  },
  {
    title: 'Susannah Solomon',
    path: '/SusannahSolomon',
    icon: <GiAbstract016 />,
    cName: 'nav-text'
  },
  {
    title: 'Ricahrd Marten 1816-1884',
    path: '/RichardMarten',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];