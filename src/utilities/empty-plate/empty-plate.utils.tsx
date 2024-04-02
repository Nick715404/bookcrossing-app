export const generateWrapForString = (string: string) => {
  let parts: string[] = string.split('|');
  const mappedArr = parts.map((item, index) => (
    <div key={index}>
      <span style={{fontSize: '20px'}}>{item}</span>
    </div>
  ))
  return mappedArr;
}