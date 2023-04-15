import { ethers } from "ethers";

const AnnualTransfer = ({ state }) => {
  const annualTransfer = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const id = document.querySelector("#id").value;
    const source = document.querySelector("#source").value;
    const option1 = document.querySelector("#option1").value;
    const option2 = document.querySelector("#option2").value;
    const option3 = document.querySelector("#option3").value;
    const post = document.querySelector("#post").value;
    
    // Input validation can be added here
    
    // Convert input values to appropriate types if necessary
   // const idInt = parseInt(id);
    //const postInt = parseInt(post);

//    const transaction = await contract.annualTransfer(1, 'Mulund', 'Kurla', 'Ghatkopar', 'Dadar','ae', 1,{gasLimit:300000,});

  const transaction = await contract.annualTransfer(id, source, option1, option2, option3, "annual transfer", post);
    await transaction.wait();
    console.log("Transaction is done");
  };

  return (
    <>
      <label>ID</label>
      <input type="number" id="id" placeholder="Enter Your ID" />
      <label>Source</label>
      <input type="text" id="source" placeholder="Enter the source" />

      <label>Option 1</label>
      <input type="text" id="option1" placeholder="Enter Your first Option" />

      <label>Option 2</label>
      <input type="text" id="option2" placeholder="Enter Your second Option" />

      <label>Option 3</label>
      <input type="text" id="option3" placeholder="Enter Your third Option" />

      <label>Post</label>
      <input type="number" id="post" placeholder="Enter your Post" />

      <button type="submit" onClick={(event) => annualTransfer(event)}>Issue Transfer</button>
    </>
  );
};

export default AnnualTransfer;