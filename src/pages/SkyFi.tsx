import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {useEffect, useState} from "react";
import axios from '../axios_config';
import {routes} from '../routes'

export default function SkyFi() {
    const [apiKey, setApiKey] = useState<string>();

    useEffect(() => {
        getApiKey();
    })

    function getApiKey() {
        axios.get(routes.config).then((r) => {
            if (r.status === 200) {
                setApiKey(r.data.OTS_SKYFI_PLUGIN_API_KEY);
                getOrders(0);
            }
        }).catch((err) => {
            console.log(err);

        })
    }

    function getOrders(page: number) {
        axios.get(`https://app.skyfi.com/platform-api/orders?page=${page}`, {headers: {
                "X-Skyfi-Api-Key": apiKey
            }}).then((r) => {
            if (r.status === 200) {
                console.log(r);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>SkyFi</div>
    )
};
