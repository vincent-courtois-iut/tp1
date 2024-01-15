export default function List({ scientists }) {
  return(
    <ul>
      {scientists.map(scientist => {
        return (
          <li key={scientist.firstname}>{scientist.firstname} {scientist.lastname} - {scientist.job}</li>
        );
      })}
    </ul>
  );
}