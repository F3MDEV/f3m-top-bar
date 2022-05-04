import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { FunctionComponent } from "react";
import "@fontsource/open-sans";
import "@fontsource/roboto";
interface StickyTopBarProps {
    /**
     * CSS position of the bar.
    */
    barPosition?: 'absolute' | 'sticky';
    /**
     * Classes of the header container.
    */
    headerContainerClasses?: string;
    /**
     * Insert elements in the Summary.
    */
    summaryContent?: React.ReactNode;
    /**
     * Insert the elements of the Healthi Patient's Summary. (isHealthiPatientSummaryActive value has to be "false").
    */
    isHealthiPatientSummaryActive?: boolean;
    /**
     * Insert badge in the PatientPhoto (isHealthiPatientSummaryActive value has to be "true").
    */
    healthiBadgePatientPhoto?: React.ReactNode;
    /**
   * Insert patient photo (isHealthiPatientSummaryActive value has to be "true").
  */
    healthiPatientPhoto?: string;
    /**
     * Handle error of the patient photo (isHealthiPatientSummaryActive value has to be "true").
    */
    healthiHandleErrorImg?: () => void;
    /**
     * Insert patient name (isHealthiPatientSummaryActive value has to be "true").
    */
    healthiPatientName?: string;
    /**
     * Insert patient age (isHealthiPatientSummaryActive value has to be "true").
    */
    healthiPatientAge?: string;
    /**
     * Insert patient SNS (isHealthiPatientSummaryActive value has to be "true").
    */
    healthiPatientSNS?: string;
    /**
     * Insert patient entity (isHealthiPatientSummaryActive value has to be "true").
    */
    healthiPatientEntity?: string;
    /**
     * Insert report icon (isHealthiPatientSummaryActive value has to be "true").
    */
    healthiReportIcon?: React.ReactNode;
    /**
     * Insert badges of the problems that patient's have.
    */
    patientBadges?: React.ReactNode;
    /**
     * Insert elements in the first section of details.
    */
    detailsContentOne?: React.ReactNode;
    /**
   * Insert elements in the second section of details.
  */
    detailsContentSecond?: React.ReactNode;
    /**
   * Insert elements in the third section of details.
  */
    detailsContentThird?: React.ReactNode;
    /**
   * Insert dashed board between first and second detail section.
  */
    isDashedBoardSecondContentInserted?: boolean;
    /**
     * Insert dashed board between second and third detail section.
    */
    isDashedBoardThirdContentInserted?: boolean;
    /**
     * Insert patient name (isHealthiPatientSummaryActive value has to be "true").
    */
    healthiPatientNickname?: string;
}
declare const F3MTopBar: FunctionComponent<StickyTopBarProps>;
export default F3MTopBar;
