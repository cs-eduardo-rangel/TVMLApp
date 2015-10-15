var Template = function() {
    return `<?xml version="1.0" encoding="UTF-8" ?>
            <document>
                <catalogTemplate>
                    <banner>
                        <title>WWDC 2015 Videos</title>
                    </banner>
                    <list>
                        <section>
                            <listItemLockup>
                                <title>App Frameworks</title>
                                <decorationLabel>3</decorationLabel>
                			    <relatedContent>
                                    <grid>
                                        <section>
                                            <lockup videoURL="http://devstreaming.apple.com/videos/wwdc/2015/1026npwuy2crj2xyuq11/102/102_sd_platforms_state_of_the_union.mp4?dl=1">
                                                <img src="${this.BASEURL}images/wwdc/wwdc_102_734x413.jpg" width="500" height="308" />
                                            </lockup>
                                            <lockup videoURL="http://devstreaming.apple.com/videos/wwdc/2015/104usewvb5m0qbwafx8p/104/104_sd_whats_new_in_xcode.mp4?dl=1">
                                                <img src="${this.BASEURL}images/wwdc/wwdc_104_734x413.jpg" width="500" height="308" />
                                            </lockup>
                                            <lockup videoURL="http://devstreaming.apple.com/videos/wwdc/2015/106z3yjwpfymnauri96m/106/106_sd_whats_new_in_swift.mp4?dl=1">
                                                <img src="${this.BASEURL}images/wwdc/wwdc_106_734x413.jpg" width="500" height="308" />
                                            </lockup>
                                        </section>
                                    </grid>
                                </relatedContent>
                            </listItemLockup>
                        </section>
                    </list>
                </catalogTemplate>
            </document>`
}
