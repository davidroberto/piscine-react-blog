const User = () => {
  const user = {
    name: "David",
    surname: "Robert",
    job: "Web Developer",
    age: 33,
    hobbies: ["test 1", "test 2", "test 2"],
  };

  return (
    <div>
      <h2>
        Hello {user.name} {user.surname}
      </h2>
      <p>Tu es : {user.job}</p>
      <p>Tu as : {user.age}</p>

      {user.hobbies.length > 0 && (
        <div>
          <p>Tes hobbies sont :</p>
          <ul>
            {user.hobbies.map((hobby) => {
              return <li>{hobby}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default User;
