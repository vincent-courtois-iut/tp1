export default function List({ scientists }) {
  return(
    <ul>
      {scientists.map(scientist => {
        return (
          <li>{scientist.firstname} {scientist.lastname} - {scientist.job}</li>
        );
      })}
    </ul>
  );
}