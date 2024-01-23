import Link from "next/link";

const Breadcrumb = ({ crumbs }) => {
  return (
    <>
    <div className="text-sm breadcrumbs mx-5  w-full ">
  <ul>
    <li><Link href={"/"} >Home</Link></li> 
    <li><Link href={"/dashboard/profile"} >Profile </Link></li> 
    <li><Link href={"/dashboard/settings"} > Settings</Link></li> 
     
    <li>Add Services</li>
  </ul>
  
</div>
    </>
  );
};

export default Breadcrumb;
