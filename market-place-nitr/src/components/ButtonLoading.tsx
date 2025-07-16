import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonLoading({
    isLoading,
    title,
    handleSubmit,
}: {
    isLoading: boolean;
    title: string;
    handleSubmit: (e: any) => void;
}) {
    return (
        <Button
            disabled={isLoading}
            className="btn-primary"
            onClick={handleSubmit}
        >
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                </>
            ) : (
                <> {title} </>
            )}
        </Button>
    );
}
