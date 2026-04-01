import WindowControls from '#Components/WindowControls';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowsWrapper';
import React from 'react';

const Contact = () => {
  return (
    <>
      <div id='window-header' className="flex items-center gap-3 p-3 border-b border-gray-200 bg-gray-50">
        <WindowControls target="contact"/>
        <h2 className="text-lg font-semibold text-gray-800">Contact Me</h2>
      </div>
      
      <div className="p-6 space-y-6 bg-white overflow-y-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-3">
          <img 
            src="/images/adrian.jpg" 
            alt="Carolyne" 
            className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-100 shadow-lg"
          />
          <h3 className="text-xl font-bold text-gray-800">Let's connect</h3>
          <p className="text-gray-600 max-w-md">
            Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
          </p>
        </div>

        {/* Social Links - Icon Only Horizontal */}
        <div className="flex justify-center gap-4">
          {socials.map(({ id, bg, link, icon, text }) => (
            <a 
              key={id}
              href={link} 
              target='_blank' 
              rel='noopener noreferrer'
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
              style={{ backgroundColor: bg }}
              title={text}
            >
              <img 
                src={icon} 
                alt={text} 
                className="w-5 h-5 object-contain" 
              />
            </a>
          ))}
        </div>

        {/* Email Contact */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Or reach me directly at{' '}
            <a 
              href="mailto:carolyne@example.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              carolyne@example.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow;