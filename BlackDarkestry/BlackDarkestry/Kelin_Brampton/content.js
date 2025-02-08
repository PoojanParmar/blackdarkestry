// chrome.storage.sync.get("refreshSpeed", ({ refreshSpeed }) => {

//     const keywordPairs = [

//         ["Part Time", "Brampton, ON"],
//         ["Flex Time", "Brampton, ON"],
//         ["Flex Time", "Mississauga, ON"],
//         ["Part Time", "Mississauga, ON"],
//         ["Flex Time", "London, ON"],
//         ["Part Time", "London, ON"],
//         ["Part Time", "St. Thomas, ON"],
//         ["Flex Time", "St. Thomas, ON"],
//         ["Part Time", "Cambridge, ON"],
//         ["Flex Time", "Cambridge, ON"]
//     ];
//     let userInteracted = false;
//     let retryCount = 0;
//     const maxRetries = 12;

//     const stopOnInteraction = () => {
//         if (!userInteracted) {
//             userInteracted = true;
//             chrome.runtime.sendMessage("stop-refresh");
//         }
//     };

//     document.addEventListener("click", stopOnInteraction);
//     document.addEventListener("keydown", stopOnInteraction);

//     const searchAndClickParent = () => {
//         console.log(`Attempting to search for keyword pairs within the same parent element.`);

//         const selectors = ['[role="link"]', "button", "a", "div"];
//         let foundAndClicked = false;

//         for (const selector of selectors) {
//             const parentElement = Array.from(document.querySelectorAll(selector)).find(el => {
//                 return keywordPairs.some(pair => {
//                     const [keyword1, keyword2] = pair;
//                     return el.innerText && el.innerText.includes(keyword1) && el.innerText.includes(keyword2);
//                 });
//             });

//             if (parentElement) {
//                 console.log(`Found a parent element with both keywords from one of the pairs.`);

//                 parentElement.scrollIntoView({ behavior: "smooth", block: "center" });
//                 parentElement.focus();

//                 if (parentElement.tagName.toLowerCase() === 'a' || parentElement.getAttribute('role') === 'link') {
//                     const href = parentElement.getAttribute('href');
//                     if (href) {
//                         console.log(`Navigating to link: ${href}`);
//                         window.location.href = href;
//                     } else {
//                         parentElement.click();
//                         console.log(`Executed standard click on link element with role="link".`);
//                     }
//                 } else {
//                     const clickEvent = new MouseEvent("click", {
//                         bubbles: true,
//                         cancelable: true,
//                         view: window
//                     });
//                     parentElement.dispatchEvent(clickEvent);
//                     console.log(`Click event dispatched on parent element containing both keywords from a pair.`);

//                     parentElement.click(); // Fallback click
//                     console.log(`Fallback click() executed on parent element.`);
//                 }

//                 foundAndClicked = true;
//                 break;
//             }
//         }

//         if (!foundAndClicked && retryCount < maxRetries) {
//             retryCount++;
//             console.log(`Retry ${retryCount}/${maxRetries} - Matching keywords not found together, waiting and retrying...`);
//             setTimeout(searchAndClickParent, refreshSpeed || 500); // Retry with refreshSpeed or default 500ms
//         } else if (!foundAndClicked) {
//             console.log("Max retries reached, refreshing the page.");
//             window.location.reload();
//         }
//     };

//     const handleShiftSelection = () => {
//         console.log("Attempting to handle shift selection...");

//         const workShiftContainer = document.querySelector(".jobDetailScheduleDropdown");

//         if (workShiftContainer) {
//             console.log("Found Work shift container with class 'jobDetailScheduleDropdown'.");

//             workShiftContainer.click();
//             console.log("Clicked 'Select One' dropdown to open shift options.");

//             setTimeout(() => {
//                 const shiftOptions = Array.from(document.querySelectorAll(".scheduleFlyoutSelection"));
//                 if (shiftOptions.length > 0) {
//                     const lastShiftOption = shiftOptions[shiftOptions.length - 1];
//                     // const firstOption = shiftOptions[shiftOptions.length - 2];
//                     // firstOption.scrollIntoView({behavior: "smooth",block:"center"});
//                     // firstOption.click();
//                     //---------------------------------------------------------------------------------------------------------------------------------
//                     lastShiftOption.scrollIntoView({ behavior: "smooth", block: "center" });
//                     lastShiftOption.click();
//                     console.log("Clicked the last shift option in the dropdown with class 'scheduleFlyoutSelection'.");

//                     const applyButton = Array.from(document.querySelectorAll("button")).find(btn => btn.innerText.includes("Apply"));
//                     if (applyButton) {
//                         applyButton.scrollIntoView({ behavior: "smooth", block: "center" });
//                         applyButton.click();
//                         console.log("Clicked the 'Apply' button after selecting shift.");
//                     } else {
//                         console.log("'Apply' button not found on the page.");
//                     }
//                 } else {
//                     console.log("No options found with class 'scheduleFlyoutSelection'.");
//                 }
//             }, 500);
//         } else {
//             console.log("Work shift container not found, retrying in 500ms...");
//             setTimeout(handleShiftSelection, 500); // Retry if container isn't found
//         }
//     };

//     const handleCreateApplication = () => {
//         console.log("Attempting to click 'Create Application' button...");

//         const createAppButton = Array.from(document.querySelectorAll("button")).find(btn => btn.innerText.includes("Create Application"));
//         if (createAppButton) {
//             createAppButton.scrollIntoView({ behavior: "smooth", block: "center" });
//             createAppButton.click();
//             console.log("Clicked the 'Create Application' button.");
//         } else {
//             console.log("'Create Application' button not found, retrying in 500ms...");
//             setTimeout(handleCreateApplication, 500); // Retry if button isn't found
//         }
//     };

//     const proceedToNextStep = () => {
//         if (userInteracted) return;

//         console.log("Proceeding to the next step...");

//         if (document.location.href.includes("jobSearch")) {
//             searchAndClickParent();
//         }

//         if (document.location.href.includes("jobDetail")) {
//             console.log("On jobDetail page - Handling shift selection dropdown and button click");
//             handleShiftSelection();
//         }

//         if (document.location.href.includes("application/ca")) {
//             console.log("On application page - Handling 'Create Application' button click");
//             handleCreateApplication();
//         }
//     };

//     // Observe the DOM for any dynamic changes and re-run the step if needed
//     const observer = new MutationObserver(proceedToNextStep);
//     observer.observe(document.body, { childList: true, subtree: true });

//     window.addEventListener("load", proceedToNextStep);
//     window.addEventListener("popstate", proceedToNextStep);
//     window.addEventListener("hashchange", proceedToNextStep);
// });
// -------------------------Main-----------------------------------------------------------------------------------------------------------------
chrome.storage.sync.get("refreshSpeed", ({ refreshSpeed }) => {
    const keywordPairs = [
        ["Flex Time", "Granville, NY"],
        ["Full Time", "Brampton, ON"],
        ["Full Time", "Whitby, ON"],
        ["Full Time", "Scarborough, ON"],
        ["Full Time", "Stoney creek, ON"],
        ["Full Time", "Concord, ON"],
        ["Full Time", "Mississauga, ON"],
        ["Full Time", "Etobicoke, ON"],
        ["Full Time", "Whitby, ON"],
        ["Part Time", "Mississauga, ON"], ["Flex Time", "Mississauga, ON"],
        ["Part Time", "Cambridge, ON"], ["Flex Time", "Cambridge, ON"],
        ["Part Time", "Brampton, ON"], ["Flex Time", "Brampton, ON"],
        ["Flex Time", "Whitby, ON"], ["Part Time", "Whitby, ON"],
        ["Flex Time", "Scarborough, ON"], ["Part Time", "Scarborough, ON"],
        ["Flex Time", "Stoney creek, ON"], ["Part Time", "Stoney creek, ON"],
        ["Flex Time", "Concord, ON"], ["Part Time", "Concord, ON"],
        ["Part Time", "Etobicoke, ON"], ["Flex Time", "Etobicoke, ON"]
    ];

    let userInteracted = false;
    let retryCount = 0;
    const maxRetries = 16;

    const stopOnInteraction = () => {
        if (!userInteracted) {
            userInteracted = true;
            chrome.runtime.sendMessage("stop-refresh");
        }
    };

    
  // Sound notification function
  const playNotificationSound = () => {
    const audio = new Audio(chrome.runtime.getURL("ping.mp3")); // You can use any valid URL or local file path
    console.log("Alarm baja bc..");
    audio.play().catch(err => console.error("Failed to play sound:", err));
  };

    document.addEventListener("click", stopOnInteraction);
    document.addEventListener("keydown", stopOnInteraction);

    const apiUrl = "https://e5mquma77feepi2bdn4d6h3mpu.appsync-api.us-east-1.amazonaws.com/graphql";


    const requestBody = {
        operationName: "searchJobCardsByLocation",
        query: `
            query searchJobCardsByLocation($searchJobRequest: SearchJobRequest!) {
                searchJobCardsByLocation(searchJobRequest: $searchJobRequest) {
                    jobCards {
                        jobId
                        jobType
                        city
                        state
                        locationName
                    }
                }
            }
        `,
        variables: {
            searchJobRequest: {
                locale: "en-CA",
                country: "Canada",
                pageSize: 100,
            }
        }
    };

    const fetchJobsAndMatch = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer <TOKEN>",
                    // "x-api-key": apiKey,
                },
                body: JSON.stringify(requestBody),
            });

            if (response.status === 401) {
                console.error("Unauthorized: Please check your API key.");
                return;
            }

            const data = await response.json();
            const jobCards = data?.data?.searchJobCardsByLocation?.jobCards;

            if (Array.isArray(jobCards) && jobCards.length > 0) {
                for (const job of jobCards) {
                    console.log(`Job ID: ${job.jobId}, Job Type: ${job.jobType}, City: ${job.city}, State: ${job.state}, Location: ${job.locationName}`);

                    const matchFound = keywordPairs.some(pair => {
                        const [keyword1, keyword2] = pair;
                        return job.jobType.includes(keyword1) && job.state.includes(keyword2);
                    });

                    if (matchFound) {
                        console.log("Match found! Opening job in new tab and reloading the page...");
                        openJobDetailInNewTab(job.jobId);
                        return;
                    }
                }
            } 
            else {
                console.log("No matching job cards found in the response.");
            }
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    const openJobDetailInNewTab = (jobId) => {
        // const jobUrl = `https://hiring.amazon.com/app#/jobDetail?jobId=${jobId}&locale=en-US`; // USA >com
        // https://hiring.amazon.ca/app#/jobDetail?jobId=JOB-CA-0000000121&locale=en-CA // Canada Loging
        const jobUrl = `https://hiring.amazon.ca/app#/jobDetail?jobId=${jobId}&locale=en-CA`; // CAnada URL
        window.open(jobUrl, '_blank');
        window.location.reload(); // Refresh the page immediately after opening a new tab
    };

    const autoRefresh = () => {
        // if (userInteracted) return;
        fetchJobsAndMatch();
        setTimeout(autoRefresh, 400);
    };

    const searchAndClickParent = () => {
        console.log("Searching for keyword pairs within the same parent element.");
        const selectors = ['[role="link"]', "button", "a", "div"];
        let foundAndClicked = false;

        for (const selector of selectors) {
            const parentElement = Array.from(document.querySelectorAll(selector)).find(el => {
                return keywordPairs.some(pair => {
                    const [keyword1, keyword2] = pair;
                    return el.innerText && el.innerText.includes(keyword1) && el.innerText.includes(keyword2);
                });
            });

            if (parentElement) {
                parentElement.scrollIntoView({ behavior: "smooth", block: "center" });
                parentElement.click();
                foundAndClicked = true;
                break;
            }
        }

        if (!foundAndClicked && retryCount < maxRetries) {
            retryCount++;
            console.log(`Retry ${retryCount}/${maxRetries} - Keywords not found, retrying...`);
            setTimeout(searchAndClickParent, refreshSpeed || 400);
        } else if (!foundAndClicked) {
            console.log("Max retries reached, skipping further searches.");
        }
    };

    const handleShiftSelection = () => {
        console.log("Attempting to handle shift selection...");
        const workShiftContainer = document.querySelector(".jobDetailScheduleDropdown");

        if (workShiftContainer) {
            workShiftContainer.click();
            setTimeout(() => {
                const shiftOptions = Array.from(document.querySelectorAll(".scheduleFlyoutSelection"));
                if (shiftOptions.length > 0) {
                    const lastShiftOption = shiftOptions[shiftOptions.length - 1];
                    lastShiftOption.scrollIntoView({ behavior: "smooth", block: "center" });
                    lastShiftOption.click();
                    playNotificationSound();
                    const applyButton = Array.from(document.querySelectorAll("button")).find(btn => btn.innerText.includes("Apply"));
                    if (applyButton) {
                        applyButton.scrollIntoView({ behavior: "smooth", block: "center" });
                        applyButton.click();
                        playNotificationSound(); // Play sound when stopped for human verification
                    } else {
                        console.log("'Apply' button not found.");
                    }
                } else {
                    console.log("No shift options found. Retrying...");
                    setTimeout(handleShiftSelection, 400); // Retry if no options found
                }
            }, 500);
        } else {
            console.log("Shift container not found. Retrying...");
            setTimeout(handleShiftSelection, 400); // Retry if container isn't found
        }
    };



    //     const handleCreateApplication = () => {
    //     console.log("Attempting to click 'Create Application' button...");

    //     const createAppButton = Array.from(document.querySelectorAll("button")).find(btn => 
    //         btn.textContent.includes("Create Application")
    //     );

    //     if (createAppButton) {
    //         createAppButton.scrollIntoView({ behavior: "smooth", block: "center" });
    //         createAppButton.click();
    //         console.log("Clicked the 'Create Application' button.");
    //     } else {
    //         console.log("'Create Application' button not found, retrying in 500ms...");
    //         setTimeout(handleCreateApplication, 500); // Retry if button isn't found
    //     }
    // };
    const handleCreateApplication = () => {
        console.log("Attempting to click 'Create Application' button...");

        const createAppButton = Array.from(document.querySelectorAll("button")).find(btn =>
            btn.textContent.includes("Create Application")
        );

        if (createAppButton) {
            createAppButton.scrollIntoView({ behavior: "smooth", block: "center" });
            createAppButton.click();
            console.log("Clicked the 'Create Application' button.");
        } else {
            console.log("'Create Application' button not found, retrying in 500ms...");
            setTimeout(handleCreateApplication, 400); // Retry if button isn't found
        }
    };



    const proceedToNextStep = () => {
        if (userInteracted) return;
        if (document.location.href.includes("jobSearch")) {
            searchAndClickParent();
        } else if (document.location.href.includes("jobDetail")) {
            handleShiftSelection();
        } else if (document.location.href.includes("application/ca")) {
            handleCreateApplication();
        }
    };

    const observer = new MutationObserver(proceedToNextStep);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("load", proceedToNextStep);
    window.addEventListener("popstate", proceedToNextStep);
    window.addEventListener("hashchange", proceedToNextStep);

    autoRefresh();
});
///---------------------- Main ends 
