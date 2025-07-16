import CustomLoader from "@/components/CustomLoader";

export default function Loading() {
    return (
        <div className="h-[80vh] grid place-items-center">
            <CustomLoader size={40} />
        </div>
    );
}
