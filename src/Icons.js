import React from 'react';
export const Left = ({ style }) => {
    return (
        <svg viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-7.64949e-07 15.5L26.25 30.6554L26.25 0.344557L-7.64949e-07 15.5Z" fill="white" />
        </svg>
    )
}
export const Right = ({ style }) => {
    return (
        <svg width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 17L0.499998 33.4545L0.5 0.545516L29 17Z" fill="white" />
        </svg>
    )
}
export const Rotate = ({ style }) => {
    return (
        <svg viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="35" height="36" fill="url(#rotate0)" />
            <defs>
                <pattern id="rotate0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#rotateImage0" transform="translate(0 -0.00555556) scale(0.005 0.00486111)" />
                </pattern>
                <image id="rotateImage0" width="200" height="208" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}
export const Drop = ({ style }) => {
    return (
        <svg width="30" height="39" viewBox="0 0 30 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="39" height="30" transform="rotate(90 30 0)" fill="url(#dropPattern0)" />
            <defs>
                <pattern id="dropPattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#dropImage0" transform="translate(-0.00983897) scale(0.00447227 0.00581395)" />
                </pattern>
                <image id="dropImage0" width="228" height="172" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAACsCAYAAABrXACMAAAJ90lEQVR4Ae2dS8he1RVA89AYxfcbKRJJ8RFbSUBQwaFFaDt3KjgUBAdCQNEOtLXgQMRBBqIUUUFoghIQiSiCCGpELUEQFbXaaHUUFVKCssqFGyjN95vvfv895+xzzvpHEu49e++19/J+r3vuhg3+SUACEpBAfQSAS4DfADcAO4FtwOb6KjFjCVRIALgWeAB4DfiexX/HgPeBx4BbFLTCRptyXALAJuA24J3F/p30Xw8Du4Fz4lZpZhKogABwI/DuSZVb7oBvgTuAjRWUbooSiENgvCoOL01/Ws61SUftBy6MU62ZSCAwAWArsHeSYtMP/gTYHhiDqUmgPAFgC3Bgul8rnfHN8CFR+arNQAJBCQDPrqTW6if9e/jaJCgO05JAOQLAnat7ta4zBym9UpZrvZGjEQCuAI6uS6v1nayU0YbCfMoRAPatz6dZzlbKciNg5CgEgOtm0WmeRZQyymCYRxkCwJPzuDTbKsMPCHxPWWYcjFqSwPid45HZVJpvIa+UJQfD2GUIALfO59DsKyllmbEwaikCwEOzazTvgkpZajiMm58A8OK8/iRZbZByR346RpRAZgLAoSQKzb+oV8rMs2G4AgSAr+Z3J9mKXikLzIghMxIAvkumT5qFlTLjfBgqMwHg8zTeJF1VKTPPieEyEQDeTqpOusWVMtOMGCYjAeCZdM4kX1kpM86KoTIQAO5Ork3aAEqZYU4MkYkAsCutL1lWH6T0t6+ZZsYwiQkAw/42tf8N24H444HEs+LyGQgA99Vu45i/L18zzIshEhMAzgd+bERKr5SJ58XlMxAYHw/QiJMoZYaZMURCAsDpjbyXPP4/FaVMOC8unYEAcD0wPCinlT+lzDA3hkhIALi9FRvHOpQy4by4dAYCwD1KmQG0ISSwLAHgXqVclpbHSSADAeD+BqW8JgM6Q0ggDQHgQaVMw9ZVJbASAeBhpVwJnSdJIA0B4BGlTMPWVSWwEgHgUaVcCZ0nSSANAeBxpUzD1lUlMJkAsBHYo5ST0XmCBNIQGKV8QinT8HVVCUwmMEr5lFJORucJEkhDANgEPK2Uafi6qgQmEwA2A88p5WR0niCBNARGKZ9XyjR8XVUCkwkApwB/V8rJ6DxBAmkIAKcCLyhlGr6uKoHJBIAtwH6lnIzOEySQhgBwGvCSUqbh66oSmEwA2AocaEzKrwHvp5w8DZ4QgsC4k92rShmiHSYhgQ0bgDOA1xuU8mr7K4EqCQBnAm8oZZXtM+kWCQBnAW8qZYvdtaYqCQBnA28pZZXtM+kWCQDnAgeVssXuWlOVBIDzgPeUssr2mXSLBIALgA+UssXuWlOVBICLgENKWWX7TLpFAsDFwIdK2WJ3ralKAsClwEdKWWX7TLpFAsBlwMdK2WJ3ralKAsCvgE+Vssr2mXSLBIDLgc+UssXuWlOVBIBtwBdKWWX7TLpFAsB24EulXEd3x/vf/gD8FXh5fD9wBPi5MbCWI4FVCQw3Oae9dQvYCfwN+GHVLD1PAh0RSCMl8OsGdxnraC4stSCBeaUE7gKOFizI0BKoncD6pRx3FGtt6/jaG2v+9RIYpLxqpY9uRhlb20ms3laaeSsE/jn8KGKSlOPjx1rbKr6VhlpH/QT+MXxLsbSUwO76a7YCCYQmsGcpIYEdwLHQpZicBNogcPNJpQReaaNWq5BAeALv/KKQwM3hSzBBCbRF4HdrStng03Hbap3VtEhg70Ihxx2n/fK/xZZbU2QC/xn2sD1BSuD3kbM2Nwk0TOCPi4T8c8MFW5oEIhP4yyIh90XO2Nwk0DCBE99HNrjle8P9s7TGCBxcdIVsbWu+xnpmOQ0T+EghG+6upVVHYKGQrT2lqLqumHC3BBa+ZPVDnW7nwcILE1j4oY5fexTuiuG7JbDwaw9/GNDtPFh4YQILfxhwpvvmFG6L4XsksPinc8PHrv64vMd5sObCBE58/3j8OxBvvyrcGsP3SGDt26/Gq6Q3KPc4FtZcgsAv36A8CukWHiVaY8weCZx8C49RSje56nE8rDkngeU2uRqF3Ai4DWTO9hirJwLTtoEcpTwNcKPknsbEWnMQmL5R8iDk8OejBHL0xxgdETi88qMERicHKYeXrz5sp6OpsdQkBNYv43Epx6ulj6NL0icX7YDAvDL+n5i7fGBrByNkiXMR+Ne6X6b+r4Br/bePNJ+rX67TMIFBxivXcsh/l0BIAsB24MvGxEz3MjVkF02qCQLANuALZWyinRZRMwHgcuAzZay5i+beBIHhKcLAp8rYRDstomYCwGXAx8pYcxfNvQkCwKVAa3sA+wFOE9PZWRHAxcCHXhk7a7zlxiMAXAQcUsZ4vTGjzggAFwAfKGNnjbfceASA84D3lDFeb8yoMwLAuQ0+Ve3rLL9N7WxWLDcxgeEx3cBbjV0ZlTHx3Lh8AgLAWcCbypgArktKYAoBYNgB/w1lnELNYyWQgABwBvB6gzJenQCXS0ogHYHx/thXlTEdY1eWwFIEgK0N7lA4fIDjlXGpCfCgMATGnQlf8soYpiUm0isBYAuwXxl7nQDrDkMAOBV4QRnDtMREeiUAnALsVcZeJ8C6wxAANgPPK2OYlphIrwRGGZ9Txl4nwLrDEAA2AU8rY5iWmEivBMbnuzyljL1OgHWHITDK+IQyhmmJifRKYJRxjzL2OgHWHYoA8LgyhmqJyfRKAHhUGXvtvnWHIgA8ooyhWmIyvRIAHlbGXrtv3aEIAA8qY6iWmEyvBIA/KWOv3bfuUASAexuU8ZpQkE1GAssQAO5pUEbv9F+m+R4TiwBwe4MyemWMNWZmswwB4HrgWENCfgMo4zLN95hYBMZNqT5pTEZfpsYaM7NZlgDwQGMyemVctvkeF4sAcD7wYyNC+jI11niZzVQCwH3KOJWax0sgEQGghfeOXhkTzYfLZiQA7Grg6qiMGWfGUAkJAHdXLqQyJpwPl85MAHimYiGVMfO8GC4xAeDtSoVUxsSz4fIFCACfVyikMhaYFUNmIAB8V5mQyphhLgxRiADwVUVCKmOhOTFsJgLAoUqEVMZMM2GYggQqeXycMhacEUNnJAA8FPwKqYwZ58FQhQkAtwYWcpBxR2FEhpdAPgLjfZBHAkqpjPnGwEiRCABPBhNSGSMNiLnkJQBcF0hIZczbfqNFJADsCyClMkYcDnPKTwC4AjhaUEplzN92I0YmANxZSEhljDwY5laOAPBsZimVsVy7jRydALAFOJBJSmWMPhDmV57A+N3k3sRSDvv4bC9frRlIoAICwKbx6Vc/JRBzP3BhBRhMUQKxCAA3Ae/OJOW3wB3AxlhVmo0EKiIwXi1vAw6uKOZhYDdwTkVlm6oE4hMArh0fO/Aa8P0agg4P7HkfeAy4BdgcvzIzlEADBIBLgN8CNwA7gW0K2EBjLUECElhM4L8vvQZ4yIkPQwAAAABJRU5ErkJggg==" />
            </defs>
        </svg>
    )
}
