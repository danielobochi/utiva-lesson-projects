import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("john");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Contact us</h1>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>

      <form>
        <div>
          <label>Name</label>
        </div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <div>
          <label>Email</label>
        </div>
        <input
          type="email"
          placeholder="you@gmail.com"
          onChange={(event) => setEmail(event.target.value)}
        />

        <div>
          <label>Message</label>
        </div>
        <textarea
          type="text"
          placeholder="Hi there!"
          rows="4"
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        <div>
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              console.log(name);
              console.log(email);
              console.log(message);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
