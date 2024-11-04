class ErrorNotifier {
    private isEnabled: boolean = false;

    constructor() {
    }

    public enable(): void {
        if (this.isEnabled) return;

        this.isEnabled = true;
        this.init();
    }

    private init(): void {
        const originalConsoleError = console.error;

        console.error = (...args: any[]) => {
            originalConsoleError.apply(console, args);

            this.showErrorPopup(args.join(' '));
        };

        window.addEventListener('error', (event) => {
            this.showErrorPopup(event.message);
        });

        window.addEventListener('unhandledrejection', (event) => {
            this.showErrorPopup(`Unhandled Promise Rejection: ${event.reason}`);
        });
    }

    private showErrorPopup(message: string): void {
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '20px';
        popup.style.left = '50%';
        popup.style.transform = 'translateX(-50%)';
        popup.style.padding = '10px 20px';
        popup.style.backgroundColor = 'rgba(255, 0, 0, 1)';
        popup.style.color = 'white';
        popup.style.borderRadius = '5px';
        popup.style.zIndex = '10000';
        popup.style.fontFamily = 'Arial, sans-serif';
        popup.style.maxWidth = '30vw';
        popup.style.wordWrap = 'break-word';
        popup.innerText = `Error: ${message}`;

        document.body.appendChild(popup);

        setTimeout(() => {
            if (popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
        }, 5000);
    }
}

export const errorNotifier = new ErrorNotifier();
