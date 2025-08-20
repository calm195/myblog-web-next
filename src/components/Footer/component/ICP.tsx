/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-20 13:11:35
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-20 13:30:27
 * @Description: to be added
 */
import React from 'react';
import Link from 'next/link';

interface ICPFooterProps {
  icpInfo?: string;
  link?: string;
}

const ICP: React.FC<ICPFooterProps> = ({
  icpInfo = "粤ICP备12345678号",
  link = 'https://beian.miit.gov.cn/'
}) => {
  return (
      <Link 
        href={link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="hover:text-gray-700 transition-colors duration-200"
      >
        {icpInfo}
      </Link>
  );
};

export default ICP;