import simpleImage from '../image/contacts-img.png';

export const Home = () => {
  return (
    <div>
      <h2>Welcome to our contact management platform!</h2>
      <div>
        <p>
          We're delighted to have you here. This is your space to effortlessly
          save and organize your contacts. To get started, simply log in and
          begin streamlining your connections. Let's make managing your contacts
          a breeze
        </p>
        <img src={simpleImage} alt="Contacts" />
      </div>
    </div>
  );
};
