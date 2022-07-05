import React, { useEffect, useState } from "react";
import { useGetScheduleMaintenance } from "../../hooks/useGetScheduleMaintenance";
import { Banner } from "../../shared/banner/banner";
import { getBaseURL } from "../../utils/utils";

const baseURL = getBaseURL();

export const ServerSentEvent: React.FC = () => {
    console.log('rendering here');
  const { refetch: refetchScheduleMaintenance } = useGetScheduleMaintenance();
  const [receivedData, setReceivedData] = useState<any>();
  const [listening, setListening] = useState(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(
        `${baseURL}/api/maintenance/maintenance-events`
      );
      console.log(events);

      events.onopen = (event) => {
        console.log("this is evemt", event);
      };

      events.onmessage = (event) => {
        alert("event");
        console.log("this is event", event);
        const parsedData = JSON.parse(event.data);

        setReceivedData(() => parsedData);
        setShowBanner(true);
        refetchScheduleMaintenance();
      };

      setListening(true);
    }
  }, [listening, refetchScheduleMaintenance]);

  const title = showBanner
    ? `Maintenance is scheduled from ${receivedData.startDate} - ${receivedData.startTime} to ${receivedData.endDate} - ${receivedData.endTime}`
    : "";

  return <>{showBanner && <Banner title={title} onClose={() => setShowBanner(false)} />}</>;
};
