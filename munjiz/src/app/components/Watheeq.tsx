function getFiles() {
    const files = [
        {
            name: "مخطط سير الوزارة.pdf",
            date: "01-01-2025",
            idNumber: "1125",
            confidintialityLevel: "سري للغاية",
        },
        {
            name: "ميزانية الربع الأول 2025.pdf",
            date: "02-01-2025",
            idNumber: "2125",
            confidintialityLevel: "سري جدا",
        },
        {
            name: "تعليمات تسجيل زائر (منصة وصول).pdf",
            date: "03-01-2025",
            idNumber: "3125",
            confidintialityLevel: "سري",
        },
        {
            name: "الهوية البصرية لوزارة الدفاع.pdf",
            date: "04-01-2025",
            idNumber: "4125",
            confidintialityLevel: "عام",
            url: "https://mod.gov.sa/ar/MediaCenter/Identity/Identity/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%87%D9%88%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B5%D8%B1%D9%8A%D8%A9.pdf",
        },
    ];
    return files.map((file) => (
        <tr key={file.idNumber}>
            <td className="p-2">
                <a
                    href={file.url ?? "#"}
                    target={file.url ? "_blank" : "_self"}
                    className="text-blue-500 underline"
                >
                    {file.name}
                </a>
            </td>
            <td className="p-2">{file.date}</td>
            <td className="p-2">{file.idNumber}</td>
            <td className="p-2">{file.confidintialityLevel}</td>
        </tr>
    ));
}
export default function Watheeq() {
    return (
        <div className="m-4">
            <table className="w-full border-collapse">
                <thead className="bg-gray-200 text-right">
                    <tr className="border-b">
                        <th className="font-bold p-2">اسم الملف</th>
                        <th className="font-bold p-2">تاريخه</th>
                        <th className="font-bold p-2">رقم الخطاب</th>
                        <th className="font-bold p-2">السرية</th>
                    </tr>
                </thead>
                <tbody>{getFiles()}</tbody>
            </table>
        </div>
    );
}
