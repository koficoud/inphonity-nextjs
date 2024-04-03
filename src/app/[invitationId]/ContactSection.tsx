export default function ContactSection() {
    return (
        <section className="container mx-auto p-3 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <div className="mx-auto grid grid-cols-12 gap-3 flex items-center mb-20">
                <div className="col-span-12 md:col-span-2"></div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4 text-left">
                    <h2 className="font-medium text-2xl sm:text-3xl lg:text-5xl text-left mb-5">
                        ¿Tienes Dudas?
                    </h2>
                    <span className="text-highlight text-2xl">¡Contáctanos!</span>
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4 text-center">
                    <button className="btn-width multi-border font-medium">
                        CHATEA EN LÍNEA
                    </button>
                    <button className="btn-width multi-border font-medium my-5">
                        LLAMA A UN ASESOR
                    </button>
                </div>
                <div className="col-span-12 md:col-span-2"></div>
            </div>
        </section>
    );
}
