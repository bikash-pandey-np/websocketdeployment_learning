import { Head } from "@inertiajs/react";

const Test = () => {
    return (
        <>
            <Head title="Test" />
            <div>Test</div>
            <div>
                <div class="avatar">
                    <div class="size-16 mask mask-decagon">
                        <img
                            src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                            alt="avatar"
                        />
                    </div>
                </div>
                <div class="avatar">
                    <div class="size-16 mask mask-hexagon-2">
                        <img
                            src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                            alt="avatar"
                        />
                    </div>
                </div>
                <div class="avatar">
                    <div class="size-16 mask mask-heart">
                        <img
                            src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test;
