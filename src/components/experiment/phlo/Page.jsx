import React from 'react';

function Page(props) {
    let {style, children, ...otherProps} = {...props};
    let {height, width, ...cleanedStyle} = {...style};
    
    let pageStyle = {
      height: '100vh',
      width: '100vw',
      ...cleanedStyle
    }
  
    return(
      <div style={pageStyle} {...otherProps}>
        {children}
      </div>
    );
  }

  export default Page;