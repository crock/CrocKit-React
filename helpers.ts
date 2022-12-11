import { isLocal } from "./constants"
import { AnalyticsProps } from "./types"

export const timer = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const logEvent = (props: AnalyticsProps) => {
	if (process.env.NODE_ENV !== "development" && !isLocal) {
		if (typeof window !== "undefined") {
            if (typeof window.splitbee !== "undefined") {
                window.splitbee.track(props.eventName, props.params)
            }

            if (typeof window.ga !== "undefined") {
                const { category, action, label, value } = props.params

                let evt = {
                    hitType: 'event',
                    eventCategory: category,
                    eventAction: action,
                }

                if (label) {
                    evt["eventLabel"] = label
                }

                if (value) {
                    evt["eventValue"] = value
                }

                window.ga('send', evt);
            }
		}
	}
}
