import React, { useEffect, useState } from "react";
import { TheFridgeTextInput, TheFridgeButton } from "../../components";
import { DeleteIcon } from "../../assets/icons";
import "./Dashboard.scss";
import axios from 'axios'
import { URL } from '../../models/enums'
import { expiryDateCheck } from '../../utils/helpers/helpers'

export interface DashboardProps { }

const Dashboard: React.FC<DashboardProps> = () => {

    const [apiData, setApiData] = useState([] as any[]);
    const [itemName, setItemName] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllDataFromAPI();
    }, []);

    // Get all data from API
    const getAllDataFromAPI = async () => {
        try {
            const response = await axios.get(URL.BASE_URL);
            const data = response.data;
            setIsLoading(false);
            setApiData(data)
        } catch (error) {
            console.error(error);
        }
    };
    // Get total data from API
    const dataLength = apiData.length;

    // Post data to API
    const postItemToAPI = async () => {
        try {
            const newItem = {
                title: itemName,
                expiry: expiryDate
            };
            const response = await axios.post(URL.BASE_URL, newItem);
            const responseData = response.data;
            setApiData([...apiData, responseData]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddToFridge = () => {
        postItemToAPI();
        setItemName('');
        setExpiryDate('');
    };

    return (
        <div className='screen'>
            <div className='div'>
                <div className='overlap'>
                    <div className='rectangle' />
                    <h1 className='heading'>Good Morning, Johny!</h1>
                    <p className='subheading'>
                        🌤 It's better to go shopping before this friday
                    </p>
                    <div className='form'>
                        <div className='form-header'>
                            <TheFridgeTextInput
                                title='🍉 Item Name'
                                titleStyle={{
                                    color: "#2E3849",
                                    fontFamily: "Inter",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    fontStyle: "normal",
                                }}
                                textInputContainerStyle={{
                                    width: 290,
                                    height: 40,
                                    borderRadius: 4,
                                    border: "2px solid #CCD6E1",
                                }}
                                type='text'
                                value={itemName}
                                onChangeText={(text: string) => setItemName(text)}
                            />
                            <TheFridgeTextInput
                                title='⏰ Expiry Date'
                                titleStyle={{
                                    color: "#2E3849",
                                    fontFamily: "Inter",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    fontStyle: "normal",
                                }}
                                textInputContainerStyle={{
                                    width: 290,
                                    height: 40,
                                    borderRadius: 4,
                                    border: "2px solid #CCD6E1",
                                }}
                                containerStyle={{
                                    marginLeft: 8,
                                }}
                                type='text'
                                value={expiryDate}
                                onChangeText={(text: string) => setExpiryDate(text)}
                            />
                            <TheFridgeButton
                                buttonTitle='ADD TO FRIDGE'
                                buttonTitleStyle={{
                                    fontFamily: "Inter",
                                    fontWeight: "700",
                                    fontSize: 13,
                                    color: "#FFFFFF",
                                    textAlign: "center",
                                }}
                                containerStyle={{
                                    width: 230,
                                    height: 40,
                                    borderRadius: 4,
                                    backgroundColor: "#00598D",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: 8,
                                    marginTop: 15,
                                }}
                                onItemClick={handleAddToFridge}
                            />
                        </div>
                        <div className='form-subText-container'>
                            <p className='form-subText'>
                                ⚠️ We don't want more than one piece of the same food in our
                                fridge.
                            </p>
                        </div>
                    </div>
                </div>
                {isLoading ? (
                    <div className='loding'>
                        Loading fridge items..
                    </div>
                ) : (
                    <div>
                        {apiData?.map((apiData, index) => {
                            return (
                                <div key={index}>
                                    <div className='text-wrapper'>Total items — {dataLength}</div>
                                    <div className='item' >
                                        <div className='title'>
                                            {apiData.title}
                                        </div>
                                        <p className='expiry-date'>
                                            {apiData.expiry}
                                        </p>
                                        {expiryDateCheck(apiData.expiry) === 'Healthy' ?
                                            (
                                                <div className='chip'>
                                                    <div className='overlap-group-healthy'>
                                                        <div className='text text-healthy'>
                                                            Healthy
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                expiryDateCheck(apiData.expiry) === 'Expiring soon'
                                            ) ? (
                                                <div className='chip'>
                                                    <div className='overlap-group-expiring-soon'>
                                                        <div className='text text-expiring-soon'>
                                                            Expiring soon
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className='chip'>
                                                    <div className='overlap-group-expired'>
                                                        <div className='text text-expired'>
                                                            Expired
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div className='delete-outline-black'>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
