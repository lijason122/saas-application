"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { addBookmark, removeBookmark } from "@/lib/actions/companion.actions";
import { useNotification } from "@/components/NotificationProvider";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({ id, name, topic, subject, duration, color, bookmarked }: CompanionCardProps) => {
    const pathname = usePathname();
    const { showNotification } = useNotification();
    const { isSignedIn } = useAuth();
    
    const handleBookmark = async () => {
      // Check if user is signed in before allowing bookmark actions
      if (!isSignedIn) {
        showNotification("Please sign in to add bookmarks", "info");
        return;
      }

      try {
        if (bookmarked) {
          await removeBookmark(id, pathname);
          showNotification("Bookmark removed successfully", "success");
        } else {
          await addBookmark(id, pathname);
          showNotification("Bookmark added successfully", "success");
        }
      } catch (error) {
        showNotification("Failed to update bookmark", "error");
        console.error("Bookmark error:", error);
      }
    };

    return (
        <article className="companion-card" style={{ backgroundColor: color }}>
        <div className="flex items-center justify-between">
            <div className="subject-badge">{subject}</div>
            <button className="companion-bookmark" onClick={handleBookmark}>
                <Image src={bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"} alt="bookmark" width={12.5} height={15} />
            </button>
        </div>

        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm">{topic}</p>
        <div className="flex items-center gap-2">
                <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
                <p className="texsm">{duration} minutes</p>
        </div>
        <Link href={`/companions/${id}`} className="w-full">
            <button className="btn-primary w-full justify-center">
                Launch Lesson
            </button>
        </Link>
        </article>
    )
}

export default CompanionCard