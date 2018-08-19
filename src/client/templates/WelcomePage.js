import React from 'react';
export function WelcomePage(props){
  let dummyContent = [];
  for(let count = 0; count < 50; count ++){
    dummyContent.push(<p key={count}>Dummy Content</p>);
  }
  return(
    <div>
      <h1>Welcome Page Component</h1>
      {dummyContent}
    </div>
  )
}
