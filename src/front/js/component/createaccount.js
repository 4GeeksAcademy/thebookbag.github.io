import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const CreateAccount = () => {
  const {store, actions} = useContext(Context)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)

    const name = event.target.full_name.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const profession = event.target.profession.value;
    const bio = event.target.bio.value;
    const twitter_username = event.target.twitter_username.value;
    const ig_username = event.target.ig_username.value;
    const favorite_genres = event.target.favorite_genres.value;
    const favorite_author = event.target.favorite_author.value;
    const favorite_quote = event.target.favorite_quote.value;
    const number_books_read = event.target.number_books_read.value;
    const favorite_book = event.target.favorite_book.value;

    actions.createUser(name, email, password, profession, bio, twitter_username, ig_username, favorite_genres, favorite_author, favorite_quote, number_books_read, favorite_book)

 

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
  <body>
    <section class="container">
      <header>Create Account</header>
      <form action="#" class="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input type="text" name="full_name" placeholder="Enter full name" required />
        </div>
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="column">
          <div className="input-box">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
        </div>
        <div className="input-box">
           <label htmlFor="profession">Profession:</label>
          <input type="text" id="profession" name="profession" />
        </div>
        <div className="input-box">
           <label htmlFor="bio">Bio:</label>
           <input type="text" id="bio" name="bio" />
         </div>
         <div className="input-box">
          <label htmlFor="name">Favorite Book:</label>
         <input type="text" id="name" name="favorite_book" />
        </div>
         <div className="input-box">
         <label htmlFor="name">Favorite Genres</label>
         <select name="favorite_genres">
           <option value="romance">
             Romance
           </option>
           <option value="comedy">
             Comedy
           </option>
          <option value="fiction">
             Fiction
           </option>
           <option value="fiction">
             Non-Fiction
          </option>
           <option value="fiction">
            Biography
          </option>
          <option value="fiction">
            Self-Development
          </option>
         </select>
        </div>
        <div className="input-box">
           <label htmlFor="name">Number Books I Read</label>
           <input type="text" id="name" name="number_books_read"/>
         </div>
         <div className="input-box">
          <label htmlFor="name">Favorite Author:</label>
         <input type="text" id="name" name="favorite_author" />
        </div>
        <div className="input-box">
          <label htmlFor="name">Favorite Quote from a book:</label>
          <input type="text" id="quote" name="favorite_quote" />
        </div>
        <div className="input-box">
           <label htmlFor="twitter_username">Twitter Username:</label>
           <input type="text" id="twitter_username" name="twitter_username" />
         </div> 
         <div className="input-box">
           <label htmlFor="ig_username">Instagram Username:</label>
           <input
            type="text" id="ig_username" name="ig_username"
          />
          </div>
        <button type="submit">Create Account</button>
      </form>
    </section>
  </body>

   
  );
};
