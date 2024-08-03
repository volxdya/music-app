import {UploadDropzone} from "@bytescale/upload-widget-react";
import {IUploadFile} from "@/types/IUploadFile.ts";

interface Props {
    setFn: React.Dispatch<React.SetStateAction<IUploadFile[]>>;
}

export function UploadFiles({setFn}: Props) {
    const options = {
        apiKey: "public_W142iiV2YrUy17pt29Wuyzxdrpe6", // This is your API key.
        maxFileCount: 1,
        showFinishButton: true, // Note: You must use 'onUpdate' if you set 'showFinishButton: false' (default).
        styles: {
            colors: {
                primary: "#bb0a39"
            }
        },
    };

    return (
        <UploadDropzone
            options={options}
            onUpdate={({uploadedFiles}) => {
                setFn(uploadedFiles);
            }}
            onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
            width="600px"
            height="375px"
        />
    );
}