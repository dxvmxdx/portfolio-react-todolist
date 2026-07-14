export default function Header() {
  const today = new Date();
  const FormattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <div>
      <p>{FormattedDate}</p>
    </div>
  );
}
