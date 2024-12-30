import { useEffect, useState } from "react";

export const Effect = () => {
  const [counter, setcounter] = useState(0);
  const [name, setname] = useState("Crio");

  useEffect(() => {
    console.log("Hey there"); //see the console in browser, it acts like component did mount of
    // class based component coz loaded only once
    return () => {
      console.log("cleanup1");
    };
  }, []);
  useEffect(() => {
    console.log("Execute on every render"); //see the console in browser, it acts like componentdidupdate of class based component
    // coz loaded on every render(i.e on click of increase)
    // **************************
    //here we are using setinterval to show componentwillunmount because first we registered id and then on return we are
    //clearing which means it is unmounting. So inconsole we can see, "1st cleanup" 2, "second execute on every render" and
    //  again call made for each two second.
    // const timerid = setInterval(() => {
    //   console.log("Hello");
    // }, 2000);
    return () => {
      //   clearInterval(timerid);
      console.log("cleanup 2");
    };
  });
  useEffect(() => {
    console.log("Execute only when name changes"); //see the console in browser, it gets consoled only on name change,
    // if you press inc only, it wont execute
    return () => {
      console.log("cleanup 3");
    };
  }, [name]);
  return (
    <div>
      <p>Effect components</p>
      <p>{counter}</p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </div>
  );
};
