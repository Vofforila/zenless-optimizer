import {Button, InputFile, RoundedElement, TextArea, TextTag} from "../../Components";
import "./UploadPanel.css"
import {Theme} from "../../Theme/Theme.tsx";
import React, {useState} from "react";
import {UploadDatabase} from "../../Utilities";

interface IUploadPanel
{
    UploadPanelState: {isOpen: boolean;databaseId: number;};
    onClose: () => void;
    children: React.ReactNode;
}

export default function UploadPanel(props: IUploadPanel)
{
    const [inputValue, setInputValue] = useState<string>('');
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    {
        const file: File | undefined = event.target.files?.[0];
        if (file)
        {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>): void =>
            {
                const fileContent: string | ArrayBuffer | undefined | null = e.target?.result;
                if (typeof fileContent === 'string')
                {
                    try
                    {
                        const jsonObject:unknown = JSON.parse(fileContent);
                        UploadDatabase(jsonObject,props.UploadPanelState.databaseId);
                    } catch (error)
                    {
                        alert('Error parsing JSON: ' + error);
                    }
                }
            };
        }
        else
        {
            alert("File Type is not JSON");
        }
    };
    const handleJsonString = (): void =>
    {
        try
        {
            const jsonObject = JSON.parse(inputValue);
            UploadDatabase(jsonObject,props.UploadPanelState.databaseId);
        } catch (error)
        {
            alert('Error! Please enter a valid JSON: ' + error);
        }
    }
    if (!props.UploadPanelState.isOpen) return null;
    return (
        <div className="pop-up">
            <div className="upload-panel">
                <Button className={"none-text-button upload-close-button"} scalable={false}
                        onPress={(): void =>
                        {
                            props.onClose();
                            setInputValue("");
                        }}>&times;</Button>
                <TextTag size={"big"}>Database Upload</TextTag>
                <div className={"load-button-wrapper"}>
                    <InputFile scalable={false} onClick={handleFileChange}>Open Json</InputFile>
                    <RoundedElement backgroundColor={Theme.primary_color_transparent} borderRadius={2} flex={1}>
                        <TextTag> &larr; Load your JSON file here...</TextTag>
                    </RoundedElement>
                </div>
                <TextArea value={inputValue} onChange={setInputValue} width={"100%"} height={100}
                          backgroundColor={Theme.primary_color}></TextArea>
                <Button scalable={false} onPress={handleJsonString}>Upload to Database</Button>
            </div>

        </div>
    )
}