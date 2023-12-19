import "./Rank.css";

export default function Rank({ name, entries }) {
  return (
    <div>
      <div className="white f3 center ph5">
        {`${name}, your current entry count is...`}
      </div>
      <div className="f1 white center">{`#${entries}`}</div>
    </div>
  );
}
