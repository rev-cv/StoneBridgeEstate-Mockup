const sprite = `
<svg style="display:none">
        <symbol id="ico-menu" viewBox="0 0 30 30">
            <g>
                <rect y="6" width="30" height="0.789474" fill="var(--black-color)"/>
                <rect y="17.0526" width="30" height="0.789474" fill="var(--black-color)"/>
                <rect y="10.7368" width="22.1053" height="1.57895" fill="var(--black-color)"/>
                <rect y="21.7895" width="22.1053" height="1.57895" fill="var(--black-color)"/>
            </g>
        </symbol>
        <symbol id="ico-whatsapp" viewBox="0 0 30 30">
            <g>
                <path d="M25.6281 4.36507C24.246 2.97596 22.5997 1.87458 20.7854 1.12516C18.9709 0.37574 17.0247 -0.00671981 15.0603 8.9345e-05C6.82914 8.9345e-05 0.120602 6.67507 0.120602 14.8651C0.120602 17.4901 0.814075 20.0401 2.11055 22.2901L0 30L7.91456 27.93C10.1005 29.115 12.5577 29.745 15.0603 29.745C23.2915 29.745 30 23.07 30 14.88C30 10.9051 28.4472 7.17007 25.6281 4.36507ZM15.0603 27.225C12.8291 27.225 10.6433 26.625 8.72863 25.5L8.27638 25.23L3.57286 26.46L4.82412 21.9L4.52261 21.435C3.28303 19.4655 2.62484 17.189 2.62312 14.8651C2.62312 8.05506 8.201 2.50508 15.0452 2.50508C18.3618 2.50508 21.4824 3.79508 23.8191 6.13507C24.9761 7.28101 25.893 8.64405 26.5166 10.1452C27.1403 11.6463 27.4584 13.2557 27.4523 14.88C27.4824 21.6901 21.9045 27.225 15.0603 27.225ZM21.8744 17.985C21.4974 17.805 19.6583 16.905 19.3266 16.77C18.9799 16.65 18.7387 16.5901 18.4824 16.95C18.2261 17.325 17.5176 18.1651 17.3065 18.405C17.0955 18.66 16.8693 18.6901 16.4924 18.495C16.1156 18.3151 14.9095 17.91 13.4924 16.65C12.3768 15.66 11.6382 14.4451 11.412 14.0701C11.201 13.6951 11.3819 13.5 11.5778 13.305C11.7437 13.1401 11.9548 12.8701 12.1357 12.66C12.3166 12.45 12.3919 12.285 12.5125 12.0451C12.6332 11.7901 12.5729 11.58 12.4824 11.4C12.3919 11.2201 11.6382 9.39006 11.3367 8.64006C11.0352 7.92006 10.7186 8.01006 10.4925 7.99506H9.76883C9.51255 7.99506 9.1206 8.08506 8.77386 8.46006C8.4422 8.83506 7.47738 9.73506 7.47738 11.5651C7.47738 13.3951 8.81909 15.1651 8.99999 15.405C9.1809 15.66 11.6382 19.41 15.3769 21.0151C16.2663 21.405 16.9598 21.63 17.5024 21.795C18.3919 22.08 19.206 22.035 19.8542 21.945C20.5779 21.8401 22.0703 21.045 22.3718 20.175C22.6884 19.305 22.6884 18.57 22.5829 18.405C22.4774 18.2401 22.2512 18.1651 21.8744 17.985Z"/>
            </g>
        </symbol>

        <symbol id="ico-email" viewBox="0 0 23 17">
            <g>
                <path d="M1.67708 0H21.3229C22.2487 0 23 0.7616 23 1.7V15.3C23 15.7509 22.8233 16.1833 22.5088 16.5021C22.1943 16.8209 21.7677 17 21.3229 17H1.67708C1.23229 17 0.80572 16.8209 0.491206 16.5021C0.176692 16.1833 0 15.7509 0 15.3L0 1.7C0 0.7616 0.751333 0 1.67708 0ZM1.4375 4.28594V15.3C1.4375 15.4341 1.54483 15.5429 1.67708 15.5429H21.3229C21.3865 15.5429 21.4474 15.5173 21.4923 15.4717C21.5373 15.4262 21.5625 15.3644 21.5625 15.3V4.28594L12.4392 10.5351C11.8718 10.9237 11.1282 10.9237 10.5608 10.5351L1.4375 4.28594ZM1.4375 1.7V2.52766L11.3658 9.32766C11.4055 9.3548 11.4522 9.36931 11.5 9.36931C11.5478 9.36931 11.5945 9.3548 11.6342 9.32766L21.5625 2.52766V1.7C21.5625 1.63559 21.5373 1.57382 21.4923 1.52827C21.4474 1.48273 21.3865 1.45714 21.3229 1.45714H1.67708C1.61354 1.45714 1.5526 1.48273 1.50767 1.52827C1.46274 1.57382 1.4375 1.63559 1.4375 1.7Z"/>
            </g>
        </symbol>

        <symbol id="ico-vk" viewBox="0 0 32 32">
            <g>
                <path d="M13.646 11.2369C14.1246 11.0023 14.9769 10.9928 15.9792 11.0023H15.9806C16.7578 11.0091 16.9815 11.0569 17.2856 11.1319C18.2061 11.3541 17.8923 12.2064 17.8923 14.2682C17.8923 14.9228 17.7751 15.8501 18.2497 16.1596C18.4515 16.2918 18.9573 16.1746 20.2038 14.0556C20.7956 13.0478 21.2429 11.8656 21.2429 11.8656C21.2979 11.7456 21.3823 11.6415 21.4883 11.5628C21.6423 11.4714 21.8496 11.4987 21.8496 11.4987L24.6574 11.4823C24.6574 11.4823 25.5001 11.3814 25.6365 11.7591C25.781 12.1642 25.3228 13.0968 24.1774 14.6256C22.2928 17.1346 22.0842 16.9001 23.651 18.3482C25.1414 19.7337 25.451 20.4101 25.4987 20.4892C26.1164 21.5173 24.817 21.5978 24.817 21.5978L22.3228 21.6346C22.3228 21.6346 21.7856 21.7409 21.0765 21.2568C20.1437 20.6173 19.271 18.9551 18.5838 19.1692C17.891 19.3928 17.9128 20.8887 17.9128 20.8887C17.9128 20.8887 17.9183 21.2092 17.7574 21.3796C17.5869 21.5609 17.2515 21.5978 17.2515 21.5978H16.1332C16.1332 21.5978 13.6719 21.7478 11.5037 19.4882C9.13918 17.0268 7.05145 12.1423 7.05145 12.1423C7.05145 12.1423 6.92872 11.8287 7.06236 11.6691C7.20554 11.4987 7.60509 11.4823 7.60509 11.4823L10.2737 11.466C10.2737 11.466 10.5246 11.5096 10.706 11.6419C10.8533 11.7482 10.9351 11.9514 10.9351 11.9514C10.9351 11.9514 11.366 13.0437 11.936 14.0337C13.0542 15.9564 13.571 16.3778 13.9487 16.1706C14.4983 15.8664 14.3387 13.4487 14.3387 13.4487C14.3387 13.4487 14.3483 12.5692 14.0619 12.1806C13.8369 11.8764 13.4169 11.7864 13.2301 11.7591C13.0815 11.7428 13.3256 11.3923 13.646 11.2369Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31 6.1923C31 3.32692 28.673 1 25.8076 1H6.1923C3.32692 1 1 3.32692 1 6.1923V25.8077C1 28.6731 3.32692 31 6.1923 31H25.8076C28.673 31 31 28.6731 31 25.8077V6.1923ZM29.8461 6.1923V25.8077C29.8461 28.0365 28.0365 29.8461 25.8076 29.8461H6.1923C3.96345 29.8461 2.15385 28.0365 2.15385 25.8077V6.1923C2.15385 3.96346 3.96345 2.15384 6.1923 2.15384H25.8076C28.0365 2.15384 29.8461 3.96346 29.8461 6.1923Z"/>
                    
            </g>
        </symbol>

        <symbol id="ico-instagram" viewBox="0 0 30 30">
            <g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 5.1923C30 2.32692 27.673 0 24.8076 0H5.1923C2.32692 0 0 2.32692 0 5.1923V24.8077C0 27.6731 2.32692 30 5.1923 30H24.8076C27.673 30 30 27.6731 30 24.8077V5.1923ZM28.8461 5.1923V24.8077C28.8461 27.0365 27.0365 28.8461 24.8076 28.8461H5.1923C2.96345 28.8461 1.15385 27.0365 1.15385 24.8077V5.1923C1.15385 2.96346 2.96345 1.15384 5.1923 1.15384H24.8076C27.0365 1.15384 28.8461 2.96346 28.8461 5.1923Z"/>
                <path d="M22 7.2358C22 6.54865 22.5487 6 23.2358 6C23.9229 6 24.4716 6.54865 24.4716 7.2358C24.4716 7.92294 23.9229 8.47159 23.2358 8.47159C22.5487 8.47159 22 7.92294 22 7.2358Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1818 7.10795C10.6808 7.10795 7 10.7887 7 15.2898C7 19.7908 10.6808 23.4716 15.1818 23.4716C19.6829 23.4716 23.3636 19.7908 23.3636 15.2898C23.3636 10.7887 19.6829 7.10795 15.1818 7.10795ZM20.6364 15.2898C20.6364 12.2589 18.2127 9.83523 15.1818 9.83523C12.1509 9.83523 9.72727 12.2589 9.72727 15.2898C9.72727 18.3207 12.1509 20.7443 15.1818 20.7443C18.2127 20.7443 20.6364 18.3207 20.6364 15.2898Z"/>
            </g>
        </symbol>

        <symbol id="ico-facebook" viewBox="0 0 30 30">
            <g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 5.1923C30 2.32692 27.673 0 24.8076 0H5.1923C2.32692 0 0 2.32692 0 5.1923V24.8077C0 27.6731 2.32692 30 5.1923 30H24.8076C27.673 30 30 27.6731 30 24.8077V5.1923ZM28.8461 5.1923V24.8077C28.8461 27.0365 27.0365 28.8461 24.8076 28.8461H5.1923C2.96345 28.8461 1.15385 27.0365 1.15385 24.8077V5.1923C1.15385 2.96346 2.96345 1.15384 5.1923 1.15384H24.8076C27.0365 1.15384 28.8461 2.96346 28.8461 5.1923Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0385 28.8077V17.8461H8.57698C8.25852 17.8461 8.00005 17.5877 8.00005 17.2692V13.2308C8.00005 12.9123 8.25852 12.6538 8.57698 12.6538H12.0385V9.19231C12.0385 6.32673 14.3652 4 17.2309 4H22.4231C22.7415 4 23 4.25846 23 4.57692V8.61538C23 8.93384 22.7415 9.19231 22.4231 9.19231H19.5385C18.5831 9.19231 17.8077 9.96765 17.8077 10.9231L17.7541 12.6538H22.4231C22.5905 12.6538 22.7497 12.7266 22.8588 12.8529C22.9683 12.9793 23.018 13.1466 22.9942 13.3121L22.4174 17.3506C22.377 17.6349 22.1335 17.8461 21.8462 17.8461H17.8077V28.8077H16.6539V17.2692C16.6539 16.9508 16.9123 16.6923 17.2309 16.6923H21.346L21.7579 13.8077H17.1587C17.0023 13.8077 16.8529 13.7442 16.7445 13.6323C16.636 13.5204 16.5772 13.3687 16.5818 13.2128C16.5818 13.2128 16.6539 10.9133 16.6539 10.9155C16.6579 9.32669 17.9491 8.03846 19.5385 8.03846H21.8462V5.15384H17.2309C15.0022 5.15384 13.1924 6.96365 13.1924 9.19231V13.2308C13.1924 13.5492 12.9339 13.8077 12.6154 13.8077H9.15395V16.6923H12.6154C12.9339 16.6923 13.1924 16.9508 13.1924 17.2692V28.8077H12.0385Z"/>
                    
            </g>
        </symbol>

        <symbol id="ico-search" viewBox="0 0 32 32">
            <g>
                <path d="M31 31L23.7617 23.7617M23.7617 23.7617C25 22.5236 25.9817 21.0538 26.6517 19.4361C27.3217 17.8183 27.6667 16.0845 27.6667 14.3335C27.6667 12.5825 27.3217 10.8487 26.6517 9.23101C25.9817 7.61331 25 6.14343 23.7617 4.90531C22.5233 3.66717 21.0533 2.68503 19.4367 2.01496C17.8183 1.34488 16.085 1 14.3333 1C12.5833 1 10.8483 1.34488 9.23166 2.01496C7.61333 2.68503 6.14334 3.66717 4.905 4.90531C2.405 7.40583 1 10.7973 1 14.3335C1 17.8698 2.405 21.2613 4.905 23.7617C7.40667 26.2622 10.7967 27.667 14.3333 27.667C17.87 27.667 21.2617 26.2622 23.7617 23.7617Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </symbol>

        <symbol id="ico-phone" viewBox="0 0 24 24">
            <g>
                <path d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z"/>
                <!-- fill="#E3E3E3" stroke="#E3E3E3" -->
            </g>
        </symbol>

        <symbol id="ico-setting" viewBox="0 0 36 17">
            <g>
                <line y1="2.5" x2="36" y2="2.5" stroke="var(--black-color)"/>
                <circle cx="9.5" cy="2.5" r="2.5" fill="var(--black-color)"/>
                <line y1="8.5" x2="36" y2="8.5" stroke="var(--black-color)"/>
                <circle cx="26.5" cy="8.5" r="2.5" fill="var(--black-color)"/>
                <line y1="14.5" x2="36" y2="14.5" stroke="var(--black-color)"/>
                <circle cx="9.5" cy="14.5" r="2.5" fill="var(--black-color)"/>
            </g>
        </symbol>

        <symbol id="ico-arrow-slim" viewBox="0 0 60 13">
            <g>
                <path d="M1 6.5L6.97576 1M1 6.5L6.97576 12M1 6.5H59" stroke="var(--black-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </symbol>

        <symbol id="ico-city" viewBox="0 0 27 30">
            <g>
            <path d="M25.5925 2.86776H19.3019C18.9719 2.86776 18.7043 3.1353 18.7043 3.46536V14.4662H14.6041V9.5832V0.597599C14.6041 0.26754 14.3365 0 14.0065 0H10.4117C10.0817 0 9.81406 0.26754 9.81406 0.597599V8.98554H8.49347V5.67728C8.49347 5.34722 8.22588 5.07968 7.89588 5.07968C7.56587 5.07968 7.29828 5.34722 7.29828 5.67728V8.98554H6.65175C6.32175 8.98554 6.05415 9.25308 6.05415 9.58314V12.4905H2.99544V10.2789C2.99544 9.94883 2.72784 9.68129 2.39784 9.68129C2.06784 9.68129 1.80024 9.94883 1.80024 10.2789V12.4906H0.597599C0.267598 12.4906 0 12.7581 0 13.0882V29.4024C0 29.7325 0.267598 30 0.597599 30H25.5925C25.9225 30 26.1901 29.7325 26.1901 29.4024V3.46536C26.1901 3.1353 25.9225 2.86776 25.5925 2.86776ZM6.05409 28.8049H1.1952V13.6858H6.05409V28.8049ZM13.4089 28.8049H7.24929V10.1808H13.4089V28.8049H13.4089ZM13.4089 8.98554H11.0093V1.1952H13.4089V8.98554ZM18.7038 28.8049H14.6041V15.6613H18.7038V28.8049ZM24.9949 28.8049H19.8995V4.06296H24.9949V28.8049Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-district" viewBox="0 0 30 30">
            <g>
                <svg width="30" height=30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 29.9991C14.3755 29.9991 13.7516 29.9602 13.1318 29.8828L13.4659 27.1463C13.9748 27.2097 14.4872 27.2417 15 27.2421V29.9991ZM9.62046 29.0003C8.49261 28.5657 7.42121 27.9961 6.42955 27.3036L7.99091 25.0597C8.80346 25.6193 9.68023 26.0787 10.6023 26.428L9.62046 29.0003ZM20.4205 29.0003L19.4318 26.4348C20.3517 26.0856 21.2262 25.6261 22.0364 25.0665L23.6045 27.3105C22.6247 27.9929 21.5672 28.5555 20.4545 28.9866L20.4205 29.0003ZM3.74319 24.8955C2.94465 23.9871 2.2579 22.9857 1.69773 21.9127L4.09091 20.6402C4.54844 21.5184 5.10926 22.3384 5.76137 23.0826L3.74319 24.8955ZM26.2909 24.8955L24.2455 23.0894C24.8985 22.3325 25.4572 21.4986 25.9091 20.606L28.3227 21.8922C27.7659 22.9575 27.0837 23.9521 26.2909 24.8545V24.8955ZM0.422733 18.5194C0.140858 17.3501 -0.00105329 16.1513 5.88527e-06 14.9482H2.72728C2.72549 15.9415 2.84223 16.9314 3.07501 17.8969L0.422733 18.5194ZM29.5841 18.4715L26.9318 17.8353C27.1582 16.8897 27.2726 15.9207 27.2727 14.9482L30 14.8867V14.9482C29.9994 16.135 29.8598 17.3175 29.5841 18.4715ZM3.08182 11.986L0.436369 11.3018C0.722868 10.1134 1.15334 8.96462 1.71819 7.88118L4.13182 9.15366C3.66676 10.0507 3.31408 11.002 3.08182 11.986ZM26.9045 11.9518C26.6628 11.0004 26.308 10.0816 25.8477 9.21524L28.2545 7.93591C28.8209 9.00578 29.2559 10.1406 29.55 11.3155L26.9045 11.9518ZM5.81591 6.77973L3.77046 4.96679C4.57998 4.05919 5.49569 3.25293 6.49773 2.56549L8.025 4.78891C7.21143 5.36084 6.46969 6.02929 5.81591 6.77973ZM24.1636 6.77973C23.5054 6.02868 22.7591 5.36022 21.9409 4.78891L23.4886 2.53128C24.4901 3.21686 25.4058 4.02078 26.2159 4.92574L24.1636 6.77973ZM10.6364 3.42065L9.66819 0.875687C10.7968 0.442655 11.9736 0.148611 13.1727 0L13.5 2.73652C12.5215 2.84793 11.5599 3.07764 10.6364 3.42065ZM19.3295 3.42065C18.4038 3.07704 17.44 2.84732 16.4591 2.73652L16.7795 0C17.9802 0.141115 19.1594 0.428279 20.2909 0.855163L19.3295 3.42065ZM15 29.9991V27.2626C15.5128 27.2622 16.0252 27.2302 16.5341 27.1668L16.8682 29.9033C16.248 29.9739 15.6241 30.0059 15 29.9991Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-street" viewBox="0 0 30 30">
            <g>
                <path d="M21.914 8.5L18.914 5.5H11.207V4.9495C12.3465 4.717 13.207 3.7075 13.207 2.5C13.207 1.1215 12.0855 0 10.707 0C9.3285 0 8.207 1.1215 8.207 2.5C8.207 3.707 9.0675 4.717 10.207 4.9495V5.5H6.2775C5.4115 5.5 4.707 6.2045 4.707 7.071V8.5H3L0 11.5L3 14.5H10.207V25H7.707V27H6.207V30H15.207V27H13.707V25H11.207V14.5H15.6365C16.5025 14.5 17.207 13.7955 17.207 12.929V11.5H18.914L21.914 8.5ZM9.207 2.5C9.207 1.673 9.88 1 10.707 1C11.534 1 12.207 1.673 12.207 2.5C12.207 3.327 11.534 4 10.707 4C9.88 4 9.207 3.327 9.207 2.5ZM14.207 28V29H7.207V28H7.707H13.707H14.207ZM12.707 27H8.707V26H12.707V27ZM16.207 12.929C16.207 13.244 15.951 13.5 15.6365 13.5H3.414L1.414 11.5L3.414 9.5H4.707H15.6365C15.951 9.5 16.207 9.756 16.207 10.071V11.5V12.929ZM17.207 10.5V10.071C17.207 9.205 16.5025 8.5 15.6365 8.5H5.707V7.071C5.707 6.756 5.963 6.5 6.2775 6.5H18.5L20.5 8.5L18.5 10.5H17.207Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-metro" viewBox="0 0 30 30">
            <g>
                <path d="M11.0637 21.3431C11.9562 21.3431 12.6825 20.6182 12.6825 19.7271C12.6825 18.8361 11.9562 18.1111 11.0637 18.1111C10.1711 18.1111 9.44495 18.8361 9.44495 19.7271C9.44495 20.6182 10.171 21.3431 11.0637 21.3431ZM11.0637 19.3332C11.2812 19.3332 11.4583 19.51 11.4583 19.7271C11.4583 19.9443 11.2812 20.121 11.0637 20.121C10.8461 20.121 10.6691 19.9443 10.6691 19.7271C10.669 19.51 10.846 19.3332 11.0637 19.3332Z" fill="var(--blue-color)"/>
                <path d="M18.885 21.3431C19.7775 21.3431 20.5037 20.6182 20.5037 19.7271C20.5037 18.8361 19.7775 18.1111 18.885 18.1111C17.9924 18.1111 17.2661 18.8361 17.2661 19.7271C17.2661 20.6182 17.9924 21.3431 18.885 21.3431ZM18.885 19.3332C19.1024 19.3332 19.2795 19.51 19.2795 19.7271C19.2795 19.9443 19.1024 20.121 18.885 20.121C18.6674 20.121 18.4903 19.9443 18.4903 19.7271C18.4903 19.51 18.6674 19.3332 18.885 19.3332Z" fill="var(--blue-color)"/>
                <path d="M29.7632 27.8495L25.6982 23.0339C26.7144 21.8329 27.2102 20.2995 27.0988 18.6818L26.2479 6.3501C26.0063 2.84859 22.9496 0 19.4338 0H10.5148C6.99916 0 3.94229 2.84859 3.70066 6.35L2.8499 18.6819C2.73739 20.3129 3.24331 21.8583 4.2768 23.0636L0.236923 27.8494C-0.12137 28.2738 -0.0671353 28.9079 0.357939 29.2655C0.54685 29.4244 0.777145 29.502 1.00623 29.502C1.29268 29.502 1.57741 29.3805 1.77644 29.1446L5.82259 24.3513C6.16884 24.552 6.53442 24.7173 6.91569 24.8455L5.00857 28.5339C4.75358 29.0272 4.94735 29.6334 5.44133 29.8879C5.58896 29.964 5.74681 30 5.90233 30C6.26699 30 6.61891 29.8015 6.7977 29.4558L7.36778 28.3533H22.5295L23.0995 29.4558C23.2783 29.8015 23.6302 30 23.9949 30C24.1504 30 24.3082 29.964 24.4559 29.8879C24.9499 29.6333 25.1437 29.0272 24.8886 28.5339L22.9893 24.8603C23.399 24.7262 23.7909 24.5488 24.1603 24.3312L28.2235 29.1446C28.4227 29.3806 28.7072 29.5021 28.9938 29.5021C29.2228 29.5021 29.4532 29.4244 29.642 29.2657C30.0671 28.908 30.1214 28.2738 29.7632 27.8495ZM19.4338 2.0099C20.4184 2.0099 21.3513 2.32758 22.1298 2.86414L22.0225 3.29293H7.92621L7.81875 2.86414C8.59716 2.32758 9.53018 2.0099 10.5148 2.0099H19.4338ZM21.5192 5.30293L19.1362 14.8181H10.8124L8.4295 5.30293H21.5192ZM4.85851 18.8199L5.70927 6.48818C5.75298 5.85495 5.92793 5.25263 6.20466 4.70596L9.04966 16.0669C9.16167 16.5142 9.56428 16.8281 10.0263 16.8281H19.922C20.3839 16.8281 20.7867 16.5142 20.8986 16.0669L23.7439 4.70606C24.0207 5.25263 24.1956 5.85495 24.2391 6.48828L25.0901 18.82C25.1699 19.9794 24.7919 21.0693 24.0253 21.8889C23.2589 22.7086 22.1957 23.16 21.0317 23.16H8.91701C7.75298 23.16 6.68984 22.7086 5.92327 21.8889C5.1568 21.0692 4.77857 19.9793 4.85851 18.8199ZM8.40694 26.3434L9.01374 25.17H20.8836L21.4903 26.3434H8.40694Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-map" viewBox="0 0 12 16">
            <g>
                <path d="M6 3.49053C5.47565 3.49053 4.96307 3.65259 4.52709 3.95623C4.09111 4.25987 3.75131 4.69145 3.55065 5.19638C3.34998 5.70131 3.29748 6.25693 3.39978 6.79296C3.50207 7.329 3.75457 7.82137 4.12535 8.20783C4.49612 8.59429 4.96851 8.85748 5.48278 8.9641C5.99706 9.07072 6.53012 9.016 7.01456 8.80685C7.49899 8.5977 7.91305 8.24352 8.20436 7.78909C8.49568 7.33466 8.65116 6.8004 8.65116 6.25386C8.65116 5.52098 8.37185 4.81812 7.87466 4.29989C7.37747 3.78166 6.70313 3.49053 6 3.49053ZM6 8.14456C5.64123 8.14456 5.29052 8.03368 4.99222 7.82592C4.69392 7.61817 4.46142 7.32288 4.32413 6.9774C4.18683 6.63192 4.15091 6.25176 4.2209 5.885C4.29089 5.51824 4.46366 5.18135 4.71734 4.91693C4.97103 4.65251 5.29424 4.47244 5.64612 4.39949C5.99799 4.32654 6.36271 4.36398 6.69417 4.50708C7.02563 4.65018 7.30893 4.89252 7.50825 5.20344C7.70757 5.51437 7.81395 5.87992 7.81395 6.25386C7.81395 6.75531 7.62284 7.23621 7.28266 7.59079C6.94248 7.94537 6.48109 8.14456 6 8.14456ZM6 0C4.40927 0.00192459 2.88422 0.66143 1.7594 1.83384C0.63458 3.00625 0.00184647 4.59583 0 6.25386C0 8.50162 1.00047 10.889 2.89326 13.1578C3.74757 14.1869 4.70906 15.1137 5.76 15.9212C5.83035 15.9725 5.91414 16 6 16C6.08586 16 6.16965 15.9725 6.24 15.9212C7.29094 15.1137 8.25243 14.1869 9.10674 13.1578C10.9995 10.889 12 8.5038 12 6.25386C11.9982 4.59583 11.3654 3.00625 10.2406 1.83384C9.11578 0.66143 7.59073 0.00192459 6 0ZM6 15.0173C4.95349 14.1752 0.837209 10.5894 0.837209 6.25386C0.837209 4.82667 1.38114 3.45793 2.34936 2.44876C3.31757 1.43958 4.63074 0.872632 6 0.872632C7.36926 0.872632 8.68243 1.43958 9.65064 2.44876C10.6189 3.45793 11.1628 4.82667 11.1628 6.25386C11.1628 10.5894 7.04651 14.1752 6 15.0173Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-rooms" viewBox="0 0 14 16">
            <g>
                <path d="M9.487 7.99715C9.487 8.09564 9.4676 8.19317 9.42991 8.28416C9.39222 8.37516 9.33697 8.45784 9.26733 8.52748C9.19769 8.59712 9.11501 8.65237 9.02401 8.69006C8.93302 8.72775 8.83549 8.74715 8.737 8.74715C8.63851 8.74715 8.54098 8.72775 8.44999 8.69006C8.35899 8.65237 8.27631 8.59712 8.20667 8.52748C8.13703 8.45784 8.08178 8.37516 8.04409 8.28416C8.0064 8.19317 7.987 8.09564 7.987 7.99715C7.987 7.79824 8.06602 7.60747 8.20667 7.46682C8.34732 7.32617 8.53809 7.24715 8.737 7.24715C8.93591 7.24715 9.12668 7.32617 9.26733 7.46682C9.40798 7.60747 9.487 7.79824 9.487 7.99715ZM6.605 0.0111494C6.53216 -0.00449621 6.45674 -0.00366593 6.38426 0.0135794C6.31178 0.0308247 6.24407 0.0640491 6.18609 0.110824C6.1281 0.157599 6.08129 0.216741 6.0491 0.283928C6.0169 0.351115 6.00013 0.424647 6 0.49915V15.4992C5.99998 15.5737 6.01664 15.6474 6.04877 15.7147C6.0809 15.782 6.12769 15.8413 6.1857 15.8882C6.2437 15.935 6.31147 15.9684 6.38402 15.9857C6.45657 16.003 6.53208 16.0038 6.605 15.9881L13.605 14.4871C13.7168 14.4629 13.817 14.401 13.8887 14.3118C13.9604 14.2227 13.9993 14.1116 13.999 13.9971V1.99715C13.9988 1.88292 13.9595 1.77221 13.8876 1.68342C13.8158 1.59464 13.7157 1.53314 13.604 1.50915L6.604 0.0101495L6.605 0.0111494ZM7 14.8801V1.11715L13 2.40215V13.5941L7 14.8801ZM5.002 14.9951V13.9951H1V2.00015H5.002V1.00015H0.5C0.367392 1.00015 0.240215 1.05283 0.146447 1.1466C0.0526785 1.24036 0 1.36754 0 1.50015V14.4951C0 14.6278 0.0526785 14.7549 0.146447 14.8487C0.240215 14.9425 0.367392 14.9951 0.5 14.9951H5.002Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-level" viewBox="0 0 14 16">
            <g>
                <path d="M12.1899 6.89924e-06L0.812077 0C0.0674526 0 7.37317e-05 0.300546 7.37317e-05 1V14.5C7.37317e-05 15.2286 -0.0219021 15.3004 0.692937 15.3004H2.24175H10.5815H12.1899C12.9345 15.3004 13.2174 15.1459 13.2174 14.4464V0.923667C13.2472 0.195069 12.9346 6.89924e-06 12.1899 6.89924e-06ZM2.24175 14.4756V4.62494C2.24175 4.56665 2.30132 4.50837 2.36089 4.50837L6.3877 4.55347V14.5535L2.39068 14.6213C2.30132 14.5922 2.24175 14.5339 2.24175 14.4756ZM7.0967 14.5922V4.50837H10.5815C10.6411 4.50837 10.7007 4.56665 10.7007 4.62494V14.4756C10.7007 14.5339 10.6411 14.5922 10.5815 14.5922H7.0967ZM12.3389 14.4756C12.3389 14.5339 12.2793 14.5922 12.2197 14.5922H11.5467C11.4188 14.5922 11.3877 14.5047 11.3877 14.4756V12.0535V9.55347V4.55347C11.3877 3.82487 11.4155 3.55347 10.7007 3.55347H2.3877C1.64307 3.55347 1.5 3.80055 1.5 4.5V14.5222C1.5 14.5222 1.5 14.6213 1.30957 14.6213L0.812077 14.5922C0.752507 14.5922 0.692937 14.5339 0.692937 14.4756V1.04024C0.692937 0.981954 0.752507 0.923667 0.812077 0.923667H12.2197C12.2793 0.923667 12.3389 0.981954 12.3389 1.04024V14.4756Z" fill="var(--blue-color)"/>
                <path d="M4.16547 2.23089L4.1496 2.21476C4.1496 2.21476 4.1496 2.19863 4.13373 2.19863C4.11785 2.16637 4.10198 2.15024 4.08611 2.13411C4.07023 2.11798 4.05436 2.10185 4.02262 2.08572C4.02262 2.08572 4.02262 2.08572 4.00674 2.08572C3.99087 2.0696 3.95912 2.0696 3.94325 2.05347C3.92738 2.05347 3.92738 2.05347 3.9115 2.05347H3.89563C3.87976 2.05347 3.8877 2.05347 3.86389 2.05347C3.83214 2.05347 3.80039 2.05347 3.76865 2.0696C3.75277 2.0696 3.72103 2.08572 3.70516 2.10185L3.68928 2.11798L3.67341 2.13411L3.65754 2.15024C3.64166 2.16637 3.64166 2.16637 3.62579 2.1825C3.62579 2.19863 3.60992 2.19863 3.60992 2.21476C3.60992 2.21476 3.60992 2.21476 3.59404 2.23089V2.24702C3.59404 2.24702 3.59404 2.24702 3.59404 2.26314C3.54643 2.34379 3.49881 2.44056 3.45119 2.52121C3.45119 2.53734 3.43531 2.55347 3.43531 2.5696C3.37182 2.66637 3.37182 2.7954 3.43531 2.89218C3.49881 2.98895 3.59404 3.05347 3.70516 3.05347C3.81627 3.05347 3.92738 3.05347 4.02262 3.05347C4.03849 3.05347 4.05436 3.05347 4.07024 3.05347C4.18135 3.05347 4.29246 2.98895 4.34008 2.89218C4.40357 2.7954 4.40357 2.66637 4.34008 2.5696C4.27658 2.42443 4.21309 2.32766 4.16547 2.23089Z" fill="var(--blue-color)"/>
                <path d="M9.08124 2.05347C8.96834 2.05347 8.85544 2.05347 8.75866 2.05347C8.74253 2.05347 8.72641 2.05347 8.71028 2.05347C8.59737 2.05347 8.48447 2.12126 8.43608 2.22296C8.37157 2.32465 8.37157 2.46025 8.43608 2.56194C8.48447 2.66364 8.54899 2.76533 8.59737 2.86703L8.6135 2.88398C8.6135 2.88398 8.6135 2.90092 8.62963 2.90092C8.64576 2.93482 8.66189 2.95177 8.67802 2.96872C8.69415 2.98567 8.71028 3.00262 8.74253 3.01957C8.74253 3.01957 8.74253 3.01957 8.75866 3.01957C8.77479 3.03652 8.80705 3.03652 8.82318 3.05347C8.83931 3.05347 8.83931 3.05347 8.85544 3.05347H8.87157C8.8877 3.05347 8.8877 3.05347 8.90382 3.05347C8.93608 3.05347 8.96834 3.05347 9.0006 3.03652C9.01673 3.03652 9.04899 3.01957 9.06511 3.00262L9.08124 2.98567L9.09737 2.96872L9.1135 2.95177C9.12963 2.93482 9.12963 2.93482 9.14576 2.91787C9.14576 2.90092 9.16189 2.90092 9.16189 2.88398C9.16189 2.88398 9.16189 2.88398 9.17802 2.86703V2.85008C9.17802 2.85008 9.17802 2.85008 9.17802 2.83313C9.2264 2.74838 9.27479 2.64669 9.32318 2.56194C9.32318 2.54499 9.33931 2.52804 9.33931 2.51109C9.40382 2.4094 9.40382 2.27381 9.33931 2.17211C9.30705 2.12126 9.19415 2.05347 9.08124 2.05347Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-total-area" viewBox="0 0 16 16">
            <g>
                <path d="M15.7018 0H13.2456C13.1099 0 13 0.109749 13 0.245249C13 0.380749 13.1105 0.490498 13.2456 0.490498H15.4561V2.6726C15.4561 2.8081 15.5667 2.91785 15.7018 2.91785C15.8368 2.91785 15.9474 2.8081 15.9474 2.6726V0.245249C15.9474 0.110362 15.8375 0 15.7018 0Z" fill="var(--blue-color)"/>
                <path d="M2.70175 15.5094H0.491228V13.3273C0.491228 13.1918 0.380702 13.082 0.245614 13.082C0.110526 13.082 0 13.1918 0 13.3273V15.7546C0 15.8901 0.110526 15.9999 0.245614 15.9999H2.70175C2.83746 15.9999 2.94737 15.8901 2.94737 15.7546C2.94737 15.6191 2.83746 15.5094 2.70175 15.5094Z" fill="var(--blue-color)"/>
                <path d="M2.22803 2.47157V13.5078C2.22803 13.6433 2.33855 13.753 2.47364 13.753H13.5263C13.662 13.753 13.7719 13.6433 13.7719 13.5078V2.47157C13.7719 2.33607 13.6614 2.22632 13.5263 2.22632H2.47364C2.33794 2.22632 2.22803 2.33668 2.22803 2.47157ZM3 3H8H13V8.15981V13H8H3V7.85841V3Z" fill="var(--blue-color)"/>
                <path d="M0.245614 2.91785C0.381316 2.91785 0.491228 2.8081 0.491228 2.6726V0.490498H2.70175C2.83746 0.490498 2.94737 0.380749 2.94737 0.245249C2.94737 0.109749 2.83684 0 2.70175 0H0.245614C0.109912 0 0 0.109749 0 0.245249V2.67199C0 2.8081 0.109912 2.91785 0.245614 2.91785Z" fill="var(--blue-color)"/>
                <path d="M15.7018 13.082C15.5661 13.082 15.4561 13.1918 15.4561 13.3273V15.5094H13.2456C13.1099 15.5094 13 15.6191 13 15.7546C13 15.8901 13.1105 15.9999 13.2456 15.9999H15.7018C15.8375 15.9999 15.9474 15.8901 15.9474 15.7546V13.3273C15.9474 13.1918 15.8375 13.082 15.7018 13.082Z" fill="var(--blue-color)"/>
            </g>

        </symbol>

        <symbol id="ico-parking" viewBox="0 0 15 16">
            <g>
                <path d="M6.50235 4.97452L6.29757 4.97575C6.13895 4.97575 6.01032 5.11297 6.01032 5.28217V7.21659C6.01032 7.3861 6.13897 7.52302 6.29757 7.52302L6.50235 7.52424C8.43877 7.52424 9.42056 7.09539 9.42056 6.24939C9.42029 5.40337 8.43851 4.97452 6.50235 4.97452ZM6.58485 6.91111V5.58794C8.14578 5.59903 8.84576 5.92574 8.84576 6.24968C8.84576 6.57333 8.14578 6.90005 6.58485 6.91111ZM10.606 2.88658C9.66226 2.40453 8.53279 2.33807 7.4527 2.33807L6.77635 2.34113L3.71309 2.32913C3.62887 2.32482 3.56341 2.36113 3.50946 2.41865C3.45525 2.47616 3.42495 2.5543 3.42495 2.63553V12.966C3.42495 13.1352 3.55358 13.2724 3.71221 13.2724H6.29787C6.4565 13.2724 6.58515 13.1352 6.58515 12.966V10.0404C6.67657 10.0407 6.77233 10.0417 6.87154 10.0429C7.02037 10.0444 7.17755 10.0459 7.34051 10.0459C8.84664 10.0459 12.3742 10.0459 12.3742 6.22045C12.3742 4.60812 11.7792 3.48647 10.606 2.88658ZM7.34022 9.43281C7.17929 9.43281 7.02382 9.43127 6.87674 9.42975C6.74203 9.42818 6.6137 9.42727 6.47669 9.42758L6.28 9.44049C6.12831 9.45035 6.01034 9.58449 6.01034 9.74629V12.6593H3.99951V2.94318L6.77554 2.95395L7.45274 2.95087C9.71047 2.95087 11.7998 3.34681 11.7998 6.22014C11.7997 9.04335 9.6565 9.43281 7.34022 9.43281ZM13.1977 0H1.80233C0.808432 0 0 0.86231 0 1.92245V14.0773C0 15.1374 0.808432 16 1.80233 16H13.1977C14.1916 16 15 15.1377 15 14.0773V1.92245C15 0.86231 14.1915 0 13.1977 0ZM14.4255 14.0769C14.4255 14.799 13.8746 15.3869 13.1977 15.3869H1.80233C1.12542 15.3869 0.574534 14.7993 0.574534 14.0769V1.92245C0.574534 1.20042 1.12512 0.612825 1.80233 0.612825H13.1977C13.8746 0.612825 14.4255 1.20011 14.4255 1.92245L14.4255 14.0769Z" fill="var(--blue-color)"/>
            </g>
        </symbol>

        <symbol id="ico-corner-arrow" viewBox="0 0 15 27">
            <g>
                <line x1="1.35355" y1="13.6464" x2="14.3536" y2="26.6464" stroke="var(--indigo-color)"/>
                <line x1="0.646447" y1="13.6464" x2="13.6464" y2="0.646446" stroke="var(--indigo-color)"/>
            </g>
        </symbol>
    </svg>
`

document.body.insertAdjacentHTML('afterbegin', sprite);