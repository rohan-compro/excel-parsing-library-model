import FeedbackBand from './FeedbackBand';
import Progress from './Progress';

export default class Screen {
    screenNumber: number;
    activityTypeName: string;
    layoutInfo: string;
    rubric: string;
    contents: string[];
    supplementArea: string | null;
    attachmentArea1: string[] | null;
    attachmentArea2: string[] | null;
    mediaInHeader: string;
    mediaInHeaderScreenInfo: number | null;
    feedBackBand1Correct: FeedbackBand;
    feedBackBand2InCorrect: FeedbackBand;
    feedBackThreshold: string | null;
    loGlobalOptions: string | null;
    loScreenSpecificOptions: string | null;
    r1BuildComments: string | null;
    r1CheckiComments: string | null;
    r2BuildComments: string | null;
    r1CheckComments: string | null;
    rcBuildComments: string | null;
    rcCheckComments: string | null;
    progress: Progress
}