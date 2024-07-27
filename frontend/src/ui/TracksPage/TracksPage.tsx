import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";

export function TracksPage() {
    return (
      <div>
          <h2 className="fs-3">Треки</h2>
          <div className="mt-4">
              <TrackCard title="Recommendation" author="whole"/>
              <TrackCard title="Recommendation" author="whole"/>
              <TrackCard title="Recommendation" author="whole"/>
              <TrackCard title="Recommendation" author="whole"/>
              <TrackCard title="Recommendation" author="whole"/>
              <TrackCard title="Recommendation" author="whole"/>
              <TrackCard title="Recommendation" author="whole"/>
          </div>
      </div>
    );
}