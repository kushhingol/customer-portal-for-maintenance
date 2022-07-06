import React, { useEffect, useState } from "react";
import { useGetScheduleMaintenance } from "../../hooks/useGetScheduleMaintenance";
import { Banner } from "../../shared/banner/banner";
import { getBaseURL } from "../../utils/utils";

const baseURL = getBaseURL();

export const ServerSentEvent: React.FC = () => {
  const { refetch: refetchScheduleMaintenance } = useGetScheduleMaintenance();
  const [receivedData, setReceivedData] = useState<any>();
  const [listening, setListening] = useState(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(
        `${baseURL}/api/maintenance/maintenance-events`
      );

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setReceivedData(() => parsedData);
        setShowBanner(true);
        refetchScheduleMaintenance();
      };

      setListening(true);
    }
  }, [listening, refetchScheduleMaintenance]);

  const title = showBanner
    ? `Maintenance is scheduled from ${receivedData.start_date} - ${receivedData.start_time} to ${receivedData.end_date} - ${receivedData.end_time}`
    : "";

  return <>{showBanner && <Banner title={title} onClose={() => setShowBanner(false)} />}</>;
};
