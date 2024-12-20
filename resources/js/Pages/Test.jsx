import { useEffect, useState } from 'react';

const Test = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('connecting to ws');

        Echo.channel('test-channel-123').listen('TestWebsocketEvent', (e) => {
            console.log(e.data);
            console.log(typeof(e.data));
            setData(e.data);
        });

        return () => {
            console.log('disconnecting from ws');
        };


    }, [Echo]);
    return (
        <>
        <div>This is test </div>
        <div className="flex-col h-16 flex">
    <div className="h-16 w-full rounded-md animate-pulse bg-neutral-300 dark:bg-neutral-700"></div>
    <div className="flex-row h-16 flex">
        <div className="h-3.5 w-full rounded-md mt-3.5 animate-pulse bg-neutral-300 dark:bg-neutral-700">
            <h3>Data 1 : {data.data ? data.data : 'No Data'}</h3>
        </div>
    </div>
</div>

        </>);
}

export default Test;