"use client";

interface ViewUserButtonProps {
  email:string
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({email}) => {     //Mendeklarasikan viewuserbutton sebagai react functional component agar bisa pake interface viewuserbutton
    const handleClick=()=> alert(`email: ${email}`);
  return (
    <>
      <button onClick={handleClick}>mantab</button>
    </>
  );
};

export default ViewUserButton
