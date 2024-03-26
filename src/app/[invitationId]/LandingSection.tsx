"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PlusDecoration from "@/components/PlusDecoration";
import {useGetInvitationByIdQuery} from "@/lib/services/invitationsApi";
import {request} from "@/mocks/request-data";

type LandingSectionProps = {
  invitationId: string;
};


const LandingSection: React.FC<LandingSectionProps> = ({invitationId}) => {
  const {isLoading, isFetching, data, error} = request;//useGetInvitationByIdQuery(invitationId);
  const router = useRouter();

  useEffect(() => {
    if (error && 'status' in error && error.status === 404) {
      router.push('/');
    }
  }, [error, router]);

  // handle redirect if invitation status is not pending
  useEffect(() => {
    if (!isLoading && !isFetching && data && data.status === 'accepted') {
      router.push('/complete');
    }
    // rejected
    if (!isLoading && !isFetching && data && data.status === 'rejected') {
      router.push('/rejected');
    }
    // cancelled or check expiration time
    if (!isLoading && !isFetching && data && (data.status === 'cancelled' || new Date(data.expires_at) < new Date())) {
      router.push('/canceled');
    }
  }, [data, isFetching, isLoading, router]);

  return (
    <section className="my-10 bg-section-1">
      {/* <PlusDecoration 
        isGreen={true}
        style={{left: "90%"}}
        // className="relative my-5 left w-5 sm:w-8 md:w-11 lg:w-14 xl:w-17"
        className="relative my-5 w-5 sm:w-8 md:w-7 lg:w-7 xl:w-7"
      /> */}
      <div
        className="sm:flex"
      >
        <div
          className="sm:w-1/2 pl-3 sm:pl-5 md:pl-10 lg:pl-14 xl:pl-32 sm:mt-10 md:mt-16 lg:mt-24 xl:mt-32"
        >
          <h1
            className={`font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl`}
          >
            {isLoading || isFetching ? (
              <div
                className="font-medium text-2xl sm:text-3xl lg:text-5xl xl:text-8xl bg-gray-300 animate-pulse h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 mb-3 w-3/4 inline-block"
                style={{verticalAlign: "middle"}}
              ></div>
            ) : (
              data && (
                <>
                  {data.client.user.first_name}
                  {' '}
                  {data.client.user.last_name}
                  {' '}
                  <span className={`inline-block`}>
                    {data.client.user.mother_last_name}
                    <Image
                      src="/img/badge-check.svg"
                      alt="Badge check"
                      width={25}
                      height={25}
                      className="inline mb-3 w-6 sm:w-8 md:w-10 sm:mb-5 md:mb-7 ml-2"
                    />
                  </span>
                </>
              )
            )}
          </h1>
          <p className="font-medium	text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            {isLoading || isFetching ? (
              <span
                className="font-medium text-2xl sm:text-3xl lg:text-5xl xl:text-8xl bg-gray-300 animate-pulse h-5 sm:h-6 md:h-7 ld:h-8 xl:h-9 mb-3 w-3/4 inline-block"
                style={{verticalAlign: "middle"}}
              ></span>
            ) : (
              <>
                Te está invitando a ser parte de su
              </>
            )}
          </p>
          <picture>
            <source width="150" media="(max-width: 600px)" srcSet="/img/circulo-inphonity-300x142.webp"/>
            <source width="300" media="(min-width: 600px) and (max-width: 1200px)"
                    srcSet="/img/circulo-inphonity-600x283.webp"/>
            <source width="600" media="(min-width: 1200px)" srcSet="/img/circulo-inphonity-900x425.webp"/>
            <img width="600" src="/img/circulo-inphonity-600x283.webp" alt="Círculo Inphonity"/>
          </picture>
        </div>
        <div className="bg-luces3"></div>

        <div
          className="sm:w-1/2 pl-5 text-right"
        >
          <div className="flex justify-end">
            <picture>
              <source width="300" media="(max-width: 600px)" srcSet="/img/bienvenido-a-inphonity-600x483.webp"/>
              <source width="600" media="(min-width: 600px) and (max-width: 1200px)"srcSet="/img/bienvenido-a-inphonity-1200x966.webp"/>
              <source width="800" media="(min-width: 1200px)" srcSet="/img/bienvenido-a-inphonity-1800x1450.webp"/>
              <img width="800" src="/img/bienvenido.png" alt="Bienvenido a Inphonity"/>
            </picture>
          </div>
        </div>
      </div>
      {/* <div className="relative mt-3 h-10 lg:h-20">
        <PlusDecoration
          style={{left: "15%"}}
          className="absolute my-3 w-6 sm:w-9 md:w-12 lg:w-15 xl:w-18"
        />
        <PlusDecoration
          style={{right: "10%"}}
          className="absolute my-3 w-8 sm:w-11 md:w-14 lg:w-17 xl:w-20"
        />
      </div> */}
    </section>
  );
}

export default LandingSection;
