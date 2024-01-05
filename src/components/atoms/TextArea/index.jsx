export default function AppTextArea({ id, name, value }) {
  return (
    <textarea id={id} name={name} required rows="5">
      {value}
    </textarea>
  );
}
