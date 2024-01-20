// components/Sidebar.js
import Link from 'next/link';


const Sidebar = () => {
    return (
        <>
            <div className="drawer">
     
                <div>
                    
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>

        </>
    );
};

export default Sidebar;
