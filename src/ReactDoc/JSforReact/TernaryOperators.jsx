import React from "react";

const TernaryOperators = () => {
  //Try to minimize the mount of lines of code you will writing specially when you writing cod directly in to UI portion.
  //in JSX  witch allow to  write javascript directly and if we can do that. we need to reduce the lines of cod and in that situation
  // "ternary Operators" came in.

  // Ternary Operators:

  // && - and
  // || - or
  //if(?) (age > 10)= true, name4= "alex" else(:) name4 = "Cristi"

  // for this ex

  let age = 16;
  let name = "Alex";

  //name2 = "Alex" if(age > 10) = true
  let name2 = age > 10 && "Alex";

  // if (age > 10) is not equal
  let name3 = age > 10 || "Alex";

  //if(?) (age > 10)= true, name4= "alex" else(:) name4 = "Cristi"
  let name4 = age > 10 ? "Alex" : "Cristi";

  if (age > 17) {
    name = "gigel";
  } else {
    name = "Alex";
  }

  // component example:
  const Component = () => {
    return age > 10 ? <div>Alex</div> : <div>Jack</div>;
  };
  return <div>TernaryOperators</div>;
};

export default TernaryOperators;
