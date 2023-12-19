export default function Navigation() {
    return (
        <nav className="bg-white shadow-md rounded-lg overflow-hidden max-w-xl mx-auto mt-4">
            <ul className="flex divide-x divide-gray-200">
                <li className="w-full">
                    <a className="block text-center py-3 text-gray-700 hover:bg-gray-100 transition-colors" href="#">
                        Home
                    </a>
                </li>
                <li className="w-full">
                    <a className="block text-center py-3 text-gray-700 hover:bg-gray-100 transition-colors" href="#">
                        Projects
                    </a>
                </li>
                <li className="w-full">
                    <a className="block text-center py-3 text-gray-700 hover:bg-gray-100 transition-colors" href="#">
                        Ex
                    </a>
                </li>
                <li className="w-full">
                    <a className="block text-center py-3 text-gray-700 hover:bg-gray-100 transition-colors" href="#">
                        Skills
                    </a>
                </li>
            </ul>
        </nav>
    )
}