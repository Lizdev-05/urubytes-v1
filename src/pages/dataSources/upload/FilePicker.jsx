import "./FilePicker.css";
import cloudImg from "../../../assets/cloud.png";
export default function FilePicker({ handleFileChange }) {
  return (
    <div className="app">
      <div className="parent">
        <div className="file-upload">
          <img src={cloudImg} alt={cloudImg} className="w-[3rem]" />
          <p className="text-center mb-2">
            Click or drag files to this area to upload PDF, <br /> DOCX, XLSX,
            and PPTX files
          </p>
          <p>Maximun file size 10mb</p>
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
}
